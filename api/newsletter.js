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
    // Ler o body corretamente (Vercel pode enviar como string ou objeto)
    let body
    if (typeof req.body === 'string') {
      body = JSON.parse(req.body)
    } else {
      body = req.body
    }
    
    const { email, name, listId } = body

    // Validar dados
    if (!email || !name) {
      return res.status(400).json({ message: 'Email e nome são obrigatórios' })
    }

    // Obter API Key das variáveis de ambiente
    const BREVO_API_KEY = process.env.BREVO_API_KEY

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY não configurada')
      return res.status(500).json({ message: 'Configuração do servidor incompleta' })
    }

    // Chamar API do Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.trim(),
        attributes: {
          FIRSTNAME: name.trim(),
          LASTNAME: ''
        },
        listIds: [parseInt(listId) || 1],
        updateEnabled: true
      })
    })

    const data = await brevoResponse.json()

    if (!brevoResponse.ok) {
      // Se o contato já existe, ainda é um sucesso
      if (brevoResponse.status === 400 && data.code === 'duplicate_parameter') {
        return res.status(200).json({ 
          success: true, 
          message: 'Email já cadastrado',
          data 
        })
      }
      throw new Error(data.message || 'Erro ao cadastrar no Brevo')
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Cadastro realizado com sucesso',
      data 
    })
  } catch (error) {
    console.error('Erro ao cadastrar no Brevo:', error)
    return res.status(500).json({ 
      message: 'Erro ao cadastrar newsletter',
      error: error.message 
    })
  }
}
