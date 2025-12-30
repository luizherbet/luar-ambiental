/**
 * Endpoint para Newsletter - Integração com Brevo
 * 
 * VERCEL SERVERLESS FUNCTION (100% GRATUITO)
 * 
 * Como usar:
 * 1. Faça deploy no Vercel (gratuito) - https://vercel.com
 * 2. Configure a variável BREVO_API_KEY no painel do Vercel (Settings > Environment Variables)
 * 3. Pronto! Não precisa de servidor próprio
 */

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Tratar preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Permitir apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Ler o body - Vercel já parseia automaticamente
    let body = req.body
    
    // Se body for string, tentar parsear
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body)
      } catch (e) {
        console.error('Erro ao parsear body string:', e)
        return res.status(400).json({ 
          message: 'Erro ao processar dados',
          error: 'Formato de dados inválido' 
        })
      }
    }
    
    // Se body não existir, retornar erro
    if (!body) {
      return res.status(400).json({ 
        message: 'Dados não fornecidos',
        error: 'Body vazio' 
      })
    }
    
    const { email, name, listId } = body

    // Validar dados
    if (!email || !name) {
      return res.status(400).json({ 
        message: 'Email e nome são obrigatórios',
        error: 'Dados incompletos' 
      })
    }

    // Obter API Key das variáveis de ambiente
    const BREVO_API_KEY = process.env.BREVO_API_KEY

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY não configurada')
      return res.status(500).json({ 
        message: 'Configuração do servidor incompleta',
        error: 'API Key não configurada no Vercel' 
      })
    }

    // Chamar API do Brevo
    let brevoResponse
    try {
      brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim(),
          attributes: {
            NOME: name.trim(),
            NAME: name.trim(),
            FIRSTNAME: name.trim(),
            SOBRENOME: '',
            LASTNAME: ''
          },
          listIds: [parseInt(listId) || 2],
          updateEnabled: true
        })
      })
    } catch (fetchError) {
      console.error('Erro ao chamar API do Brevo:', fetchError)
      return res.status(500).json({ 
        message: 'Erro ao conectar com o serviço de newsletter',
        error: fetchError.message 
      })
    }

    // Tentar parsear resposta do Brevo
    let data
    try {
      const responseText = await brevoResponse.text()
      if (responseText) {
        data = JSON.parse(responseText)
      } else {
        data = {}
      }
    } catch (parseError) {
      console.error('Erro ao parsear resposta do Brevo:', parseError)
      return res.status(500).json({ 
        message: 'Erro ao processar resposta do serviço',
        error: 'Resposta inválida do servidor' 
      })
    }

    if (!brevoResponse.ok) {
      // Se o contato já existe, ainda é um sucesso
      if (brevoResponse.status === 400 && data.code === 'duplicate_parameter') {
        return res.status(200).json({ 
          success: true, 
          message: 'Email já cadastrado',
          data 
        })
      }
      
      const errorMessage = data.message || data.error || 'Erro ao cadastrar no Brevo'
      console.error('Erro do Brevo:', brevoResponse.status, errorMessage)
      return res.status(brevoResponse.status).json({ 
        message: 'Erro ao cadastrar no serviço',
        error: errorMessage 
      })
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Cadastro realizado com sucesso',
      data 
    })
  } catch (error) {
    console.error('Erro inesperado:', error)
    return res.status(500).json({ 
      message: 'Erro ao cadastrar newsletter',
      error: error.message || 'Erro desconhecido' 
    })
  }
}





