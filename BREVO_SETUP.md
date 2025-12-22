# Configuração do Brevo para Newsletter

## Passo a Passo para Integração

### 1. Obter a API Key do Brevo

1. Acesse o painel do Brevo: https://app.brevo.com
2. Vá em **Settings** > **API Keys**
3. Crie uma nova API Key ou use uma existente
4. **IMPORTANTE**: Copie e guarde a chave (ela só aparece uma vez)

### 2. Obter o ID da Lista

1. No painel do Brevo, vá em **Contacts** > **Lists**
2. Encontre sua lista de contatos
3. O ID da lista aparece na URL ou nas configurações da lista
4. Exemplo: Se a URL é `https://app.brevo.com/lists/123`, o ID é `123`

### 3. Criar Endpoint Backend

Você precisa criar um endpoint backend para proteger sua API Key. Escolha uma opção:

#### Opção A: Vercel Functions (Recomendado)

Crie o arquivo `api/newsletter.js` na raiz do projeto:

```javascript
// api/newsletter.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, name, listId } = req.body
  const BREVO_API_KEY = process.env.BREVO_API_KEY

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          LASTNAME: ''
        },
        listIds: [parseInt(listId)]
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Erro ao cadastrar')
    }

    const data = await response.json()
    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Erro Brevo:', error)
    return res.status(500).json({ 
      message: 'Erro ao cadastrar newsletter',
      error: error.message 
    })
  }
}
```

No Vercel, adicione a variável de ambiente `BREVO_API_KEY` nas configurações do projeto.

#### Opção B: Netlify Functions

Crie o arquivo `netlify/functions/newsletter.js`:

```javascript
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method not allowed' }) }
  }

  const { email, name, listId } = JSON.parse(event.body)
  const BREVO_API_KEY = process.env.BREVO_API_KEY

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          LASTNAME: ''
        },
        listIds: [parseInt(listId)]
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Erro ao cadastrar')
    }

    const data = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Erro ao cadastrar newsletter',
        error: error.message 
      })
    }
  }
}
```

#### Opção C: Backend Node.js/Express

```javascript
// server.js
const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

app.post('/api/newsletter', async (req, res) => {
  const { email, name, listId } = req.body
  const BREVO_API_KEY = process.env.BREVO_API_KEY

  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        attributes: {
          FIRSTNAME: name,
          LASTNAME: ''
        },
        listIds: [parseInt(listId)]
      },
      {
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    )

    res.json({ success: true, data: response.data })
  } catch (error) {
    console.error('Erro Brevo:', error.response?.data || error.message)
    res.status(500).json({ 
      message: 'Erro ao cadastrar newsletter',
      error: error.response?.data || error.message 
    })
  }
})

app.listen(3000, () => console.log('Server running on port 3000'))
```

### 4. Atualizar o Serviço Frontend

No arquivo `src/services/newsletterService.js`, atualize a URL do endpoint:

```javascript
const BACKEND_ENDPOINT = 'https://seu-dominio.com/api/newsletter'
// ou para desenvolvimento local:
// const BACKEND_ENDPOINT = 'http://localhost:3000/api/newsletter'
```

### 5. Configurar o ID da Lista

No arquivo `src/components/NewsletterButton.vue`, atualize:

```javascript
const BREVO_LIST_ID = 123 // Substitua pelo ID real da sua lista
```

## Testando

1. Preencha o formulário de newsletter
2. Verifique no painel do Brevo se o contato foi adicionado à lista
3. Verifique os logs do backend para debug

## Documentação Brevo

- API Docs: https://developers.brevo.com/reference/createcontact
- Dashboard: https://app.brevo.com


