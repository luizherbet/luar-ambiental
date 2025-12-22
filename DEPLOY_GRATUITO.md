# Deploy Gratuito no Vercel - Newsletter com Brevo

## 🆓 Vercel é 100% Gratuito para este projeto!

O Vercel oferece:
- ✅ Deploy gratuito ilimitado
- ✅ Serverless Functions gratuitas (100GB-hora/mês)
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Sem necessidade de servidor próprio

## Passo a Passo

### 1. Criar conta no Vercel (Gratuito)

1. Acesse: https://vercel.com
2. Clique em **Sign Up**
3. Faça login com GitHub (recomendado) ou email

### 2. Conectar seu repositório

1. No Vercel, clique em **Add New Project**
2. Conecte seu repositório GitHub (ou faça upload do código)
3. O Vercel detectará automaticamente que é um projeto Vue

### 3. Configurar Build

O Vercel já está configurado com o arquivo `vercel.json` criado. As configurações são:
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `dist` (automático)
- **Install Command**: `npm install` (automático)

### 4. Configurar Variável de Ambiente

**IMPORTANTE**: Antes de fazer deploy, configure a API Key do Brevo:

1. No painel do Vercel, vá em **Settings** > **Environment Variables**
2. Adicione:
   - **Name**: `BREVO_API_KEY`
   - **Value**: Sua API Key do Brevo (obtenha em https://app.brevo.com > Settings > API Keys)
   - **Environments**: Marque todas (Production, Preview, Development)

### 5. Obter ID da Lista do Brevo

1. Acesse: https://app.brevo.com
2. Vá em **Contacts** > **Lists**
3. Clique na sua lista
4. O ID aparece na URL: `https://app.brevo.com/lists/123` → ID é `123`
5. Anote este ID

### 6. Atualizar o Código

No arquivo `src/components/NewsletterButton.vue`, linha 144:
```javascript
const BREVO_LIST_ID = 123 // Substitua pelo ID real da sua lista
```

### 7. Fazer Deploy

1. No Vercel, clique em **Deploy**
2. Aguarde o build (2-3 minutos)
3. Pronto! Seu site estará no ar com newsletter funcionando

### 8. Testar

1. Acesse seu site no Vercel
2. Preencha o formulário de newsletter
3. Verifique no Brevo se o contato foi adicionado

## Alternativa: Netlify (Também Gratuito)

Se preferir Netlify:

1. Crie conta em: https://netlify.com
2. Mova o arquivo `api/newsletter.js` para `netlify/functions/newsletter.js`
3. Faça upload do projeto
4. Configure a variável `BREVO_API_KEY` nas configurações

## URLs após Deploy

Após o deploy, seu endpoint estará em:
- `https://seu-projeto.vercel.app/api/newsletter`

O arquivo `newsletterService.js` já está configurado para usar `/api/newsletter` automaticamente.

## Suporte

- Documentação Vercel: https://vercel.com/docs
- Documentação Brevo: https://developers.brevo.com


