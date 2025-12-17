/**
 * Serviço de Newsletter - Integração com Brevo
 * 
 * IMPORTANTE: Por segurança, a API Key do Brevo NÃO deve ser exposta no frontend.
 * Crie um endpoint backend que receba os dados e faça a chamada para a API do Brevo.
 * 
 * Opções:
 * 1. Criar um endpoint backend (Node.js, Python, PHP, etc.)
 * 2. Usar Vercel Functions ou Netlify Functions
 * 3. Usar um serviço de proxy
 */

const BREVO_API_URL = 'https://api.brevo.com/v3/contacts'

/**
 * Adiciona um contato à lista do Brevo
 * @param {string} email - Email do contato
 * @param {string} name - Nome do contato
 * @param {number} listId - ID da lista do Brevo (obtenha no painel do Brevo)
 * @returns {Promise} Resposta da API
 */
export async function subscribeToNewsletter(email, name, listId) {
  // Endpoint relativo - funciona automaticamente no Vercel
  const BACKEND_ENDPOINT = '/api/newsletter'
  
  try {
    const response = await fetch(BACKEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        listId
      })
    })

    // Verificar se a resposta é JSON
    const contentType = response.headers.get('content-type')
    let errorData, successData

    if (contentType && contentType.includes('application/json')) {
      const data = await response.json()
      if (!response.ok) {
        errorData = data
      } else {
        successData = data
      }
    } else {
      // Se não for JSON, ler como texto
      const text = await response.text()
      if (!response.ok) {
        errorData = { message: text || 'Erro ao cadastrar newsletter' }
      } else {
        successData = { success: true, message: text || 'Cadastro realizado com sucesso' }
      }
    }

    if (!response.ok) {
      throw new Error(errorData?.message || `Erro ${response.status}: ${response.statusText}`)
    }

    return successData || { success: true }
  } catch (error) {
    console.error('Erro ao cadastrar newsletter:', error)
    
    // Mensagens de erro mais amigáveis
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('Erro de conexão. Verifique sua internet e tente novamente.')
    }
    
    throw error
  }
}

/**
 * Exemplo de implementação do endpoint backend (Node.js/Express)
 * 
 * // backend/api/newsletter.js
 * import axios from 'axios'
 * 
 * export default async function handler(req, res) {
 *   if (req.method !== 'POST') {
 *     return res.status(405).json({ message: 'Method not allowed' })
 *   }
 * 
 *   const { email, name, listId } = req.body
 *   const BREVO_API_KEY = process.env.BREVO_API_KEY // Armazene em variável de ambiente
 * 
 *   try {
 *     const response = await axios.post(
 *       'https://api.brevo.com/v3/contacts',
 *       {
 *         email,
 *         attributes: {
 *           FIRSTNAME: name,
 *           LASTNAME: ''
 *         },
 *         listIds: [listId] // ID da sua lista no Brevo
 *       },
 *       {
 *         headers: {
 *           'api-key': BREVO_API_KEY,
 *           'Content-Type': 'application/json'
 *         }
 *       }
 *     )
 * 
 *     return res.status(200).json({ success: true, data: response.data })
 *   } catch (error) {
 *     console.error('Erro Brevo:', error.response?.data || error.message)
 *     return res.status(500).json({ 
 *       message: 'Erro ao cadastrar newsletter',
 *       error: error.response?.data || error.message 
 *     })
 *   }
 * }
 */
