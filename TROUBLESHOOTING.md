# Troubleshooting - Newsletter e Performance

## 🔴 Erro: "Erro ao cadastrar. Tente novamente."

### Possíveis Causas e Soluções:

#### 1. API Key não configurada no Vercel
**Sintoma**: Erro 500 ou "Configuração do servidor incompleta"

**Solução**:
1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto `luar-ambiental`
3. Vá em **Settings** > **Environment Variables**
4. Adicione:
   - **Name**: `BREVO_API_KEY`
   - **Value**: `SUA_API_KEY_AQUI` (obtenha em https://app.brevo.com > Settings > API Keys)
   - **Environments**: Marque todas (Production, Preview, Development)
5. Clique em **Save**
6. **IMPORTANTE**: Faça um novo deploy após adicionar a variável

#### 2. Endpoint não encontrado (404)
**Sintoma**: Erro 404 ao tentar cadastrar

**Solução**:
- Verifique se o arquivo `api/newsletter.js` existe na raiz do projeto
- Verifique se o `vercel.json` está configurado corretamente
- Faça um novo deploy

#### 3. CORS ou Problema de Rede
**Sintoma**: "Failed to fetch" ou "NetworkError"

**Solução**:
- Verifique se o site está acessível
- Abra o Console do navegador (F12) e veja os erros
- Verifique se não há bloqueadores de anúncio interferindo

### Como Testar o Endpoint Manualmente:

1. Abra o Console do navegador (F12)
2. Execute:
```javascript
fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'teste@exemplo.com',
    name: 'Teste',
    listId: 2
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

Se retornar erro, veja a mensagem para identificar o problema.

---

## 🐌 Problema: Página demora para carregar / Serviço de autenticação

### Possíveis Causas:

#### 1. Proteção de Deploy no Vercel
**Sintoma**: Página pede login ou demora muito

**Solução**:
1. No Vercel, vá em **Settings** > **Deployment Protection**
2. Verifique se há alguma proteção ativa
3. Se houver, desative temporariamente para testar
4. Ou configure para permitir acesso público

#### 2. Imagens muito grandes
**Sintoma**: Página carrega lentamente

**Solução**:
- As imagens do carousel estão grandes (2-3 MB cada)
- Considere otimizar as imagens antes do upload
- Use ferramentas como: https://tinypng.com ou https://squoosh.app

#### 3. Cache do navegador
**Sintoma**: Página antiga sendo exibida

**Solução**:
- Limpe o cache do navegador (Ctrl+Shift+Del ou Cmd+Shift+Del)
- Ou faça um hard refresh (Ctrl+F5 ou Cmd+Shift+R)

#### 4. Problema de Build
**Sintoma**: Build demora muito ou falha

**Solução**:
1. No Vercel, vá em **Deployments**
2. Clique no último deploy
3. Veja os **Build Logs** para identificar erros
4. Se houver erros, corrija e faça novo deploy

---

## ✅ Checklist de Verificação

- [ ] API Key `BREVO_API_KEY` configurada no Vercel
- [ ] Variável de ambiente aplicada em todos os ambientes (Production, Preview, Development)
- [ ] Novo deploy feito após adicionar a variável
- [ ] Arquivo `api/newsletter.js` existe na raiz do projeto
- [ ] Arquivo `vercel.json` está configurado
- [ ] ID da lista (`BREVO_LIST_ID = 2`) está correto no código
- [ ] Console do navegador não mostra erros críticos
- [ ] Endpoint `/api/newsletter` responde (teste manual)

---

## 🔍 Debug Avançado

### Ver logs do Vercel:
1. No Vercel, vá em **Deployments**
2. Clique no deploy
3. Vá em **Runtime Logs**
4. Veja os logs em tempo real quando testar o cadastro

### Ver logs do navegador:
1. Abra o site
2. Pressione F12
3. Vá em **Console** para ver erros JavaScript
4. Vá em **Network** para ver requisições HTTP
5. Filtre por "newsletter" para ver a requisição

---

## 📞 Se Nada Funcionar

1. Verifique se a API Key do Brevo está ativa e válida
2. Teste a API do Brevo diretamente (usando Postman ou curl)
3. Verifique se o ID da lista (2) está correto no Brevo
4. Veja os logs do Vercel para erros específicos





