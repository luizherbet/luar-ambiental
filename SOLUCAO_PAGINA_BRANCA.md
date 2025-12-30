# Solução: Página em Branco no Vercel

## Problema
A página aparece em branco após o deploy no Vercel.

## Soluções

### 1. Verificar no Console do Navegador
1. Abra o site no Vercel
2. Pressione `F12` (ou `Cmd+Option+I` no Mac)
3. Vá na aba **Console**
4. Veja se há erros em vermelho

### 2. Verificar se os Assets estão Carregando
1. Na aba **Network** do DevTools
2. Recarregue a página (`F5`)
3. Verifique se os arquivos `.js` e `.css` estão sendo carregados (status 200)

### 3. Configuração do Vercel no Painel

No painel do Vercel, vá em **Settings** > **General** e verifique:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework Preset**: `Vite` (ou deixe em Auto)

### 4. Verificar Variáveis de Ambiente

Certifique-se de que a variável `BREVO_API_KEY` está configurada:
- **Settings** > **Environment Variables**
- Nome: `BREVO_API_KEY`
- Valor: Sua API Key do Brevo

### 5. Fazer Novo Deploy

Após as correções:
1. Faça commit das mudanças
2. Push para o GitHub
3. O Vercel fará deploy automático

### 6. Se Ainda Não Funcionar

Tente deletar o `vercel.json` temporariamente e deixe o Vercel detectar automaticamente:
```bash
# No terminal do projeto
rm vercel.json
git add .
git commit -m "Remove vercel.json para detecção automática"
git push
```

O Vercel detecta projetos Vue/Vite automaticamente e deve funcionar sem configuração manual.

## Debug Rápido

Abra o console do navegador e execute:
```javascript
console.log('App carregado:', document.getElementById('app'))
```

Se retornar `null`, o problema é no carregamento do HTML.
Se retornar o elemento, o problema é no JavaScript.





