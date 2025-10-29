# 🚀 Guia Completo: Subir Site Amira Acessórios no GitHub Pages

## ⏱️ Tempo Total: ~10 minutos

---

## 📋 O que você vai fazer:

1. Criar conta no GitHub
2. Criar um repositório
3. Fazer upload dos arquivos
4. Ativar GitHub Pages
5. Seu site estará online!

---

## 🔧 Passo 1: Criar Conta no GitHub

### 1.1 Abra o navegador
- Acesse: **https://github.com**

### 1.2 Clique em "Sign up"
- Botão no canto superior direito

### 1.3 Preencha os dados
- **Email:** Seu email (ex: seu-email@gmail.com)
- **Senha:** Uma senha forte
- **Username:** Seu nome de usuário (ex: seu-nome-aqui)
  - ⚠️ Importante: Anote este nome! Você vai precisar

### 1.4 Verifique seu email
- GitHub vai enviar um email
- Clique no link de confirmação

✅ **Conta criada!**

---

## 📁 Passo 2: Criar um Repositório

### 2.1 Após fazer login
- Você verá a página inicial do GitHub
- Procure por **"New"** (botão verde no canto esquerdo)
- Clique nele

### 2.2 Preencha os dados do repositório

**Repository name:**
```
amira-acessorios
```

**Description (opcional):**
```
Site de vendas - Amira Acessórios
```

**Visibilidade:** 
- Escolha **"Public"** (importante para GitHub Pages funcionar)

### 2.3 Clique em "Create repository"

✅ **Repositório criado!**

---

## 📤 Passo 3: Fazer Upload dos Arquivos

### 3.1 Você verá uma página vazia
- Procure por **"uploading an existing file"** (em azul)
- Clique nele

### 3.2 Selecione os arquivos
Você precisa fazer upload de:
- ✅ **index.html** (o arquivo principal)
- ✅ **002.webp** até **008.webp** (as imagens)

**Como fazer:**
1. Clique em **"choose your files"**
2. Selecione todos os arquivos de uma vez:
   - Segure **Ctrl** (Windows) ou **Cmd** (Mac)
   - Clique em cada arquivo
   - Clique em "Open"

### 3.3 Confirme o upload
- Clique em **"Commit changes"** (botão verde)
- Aguarde alguns segundos

✅ **Arquivos enviados!**

---

## 🌐 Passo 4: Ativar GitHub Pages

### 4.1 Vá para Settings
- No topo da página, clique em **"Settings"** (ícone de engrenagem)

### 4.2 Procure por "Pages"
- No menu esquerdo, procure por **"Pages"**
- Clique nele

### 4.3 Configure o Source
- **Source:** Escolha **"Deploy from a branch"**
- **Branch:** Escolha **"main"**
- **Folder:** Escolha **"/ (root)"**
- Clique em **"Save"**

### 4.4 Aguarde alguns minutos
- GitHub vai processar
- Você verá uma mensagem: "Your site is live at: https://seu-usuario.github.io/amira-acessorios"

✅ **Site online!**

---

## 🎉 Seu Site Está Pronto!

**URL do seu site:**
```
https://seu-usuario.github.io/amira-acessorios
```

**Exemplo:**
Se seu username é "joao-silva", o site será:
```
https://joao-silva.github.io/amira-acessorios
```

---

## 🔧 Editar o Site Depois

Se você quiser fazer mudanças no site:

### Opção 1: Editar pelo GitHub (Fácil)
1. Abra seu repositório
2. Clique em **index.html**
3. Clique no ícone de lápis (edit)
4. Faça suas mudanças
5. Clique em **"Commit changes"**
6. Aguarde 1-2 minutos
7. Seu site será atualizado automaticamente

### Opção 2: Fazer Upload de Novo Arquivo
1. Clique em **"Add file"** → **"Upload files"**
2. Selecione o arquivo novo
3. Clique em **"Commit changes"**

---

## 💡 Dicas Importantes

### Customizar o Site

**Para alterar o WhatsApp:**
1. Abra o index.html
2. Procure por: `5548996377111`
3. Substitua pelo seu número (sem caracteres especiais)
4. Clique em "Commit changes"

**Para alterar preços:**
1. Procure por: `R$ 49,90`
2. Substitua pelo preço desejado
3. Clique em "Commit changes"

**Para alterar Instagram:**
1. Procure por: `https://instagram.com`
2. Substitua pela sua URL
3. Clique em "Commit changes"

---

## 🚨 Troubleshooting

### Site não aparece
**Solução:**
1. Verifique se o repositório é **Public**
2. Verifique se o arquivo se chama **index.html** (exatamente assim)
3. Aguarde 5-10 minutos
4. Limpe o cache do navegador (Ctrl+Shift+Delete)

### Imagens não aparecem
**Solução:**
1. Verifique se as imagens (002.webp, 003.webp, etc) estão no mesmo repositório
2. Verifique os nomes das imagens (case-sensitive)
3. Aguarde alguns minutos e recarregue a página

### Mudanças não aparecem
**Solução:**
1. Aguarde 2-3 minutos após fazer commit
2. Limpe o cache (Ctrl+Shift+Delete)
3. Tente em outro navegador

---

## 📱 Testar no Celular

Depois que o site estiver online:
1. Abra a URL no seu celular
2. Verifique se está responsivo
3. Teste os botões de WhatsApp
4. Teste os links

---

## 🎯 Próximos Passos

### 1. Integrar Mercado Pago
1. Crie uma conta em [mercadopago.com.br](https://www.mercadopago.com.br)
2. Gere um "link de pagamento" para cada produto
3. Edite o index.html no GitHub
4. Procure por: `<a href="#" class="btn">Comprar</a>`
5. Substitua o `#` pelo link do Mercado Pago
6. Clique em "Commit changes"

**Exemplo:**
```html
<a href="https://mpago.la/seu-codigo-aqui" class="btn">Comprar</a>
```

### 2. Adicionar Google Analytics (Opcional)
1. Crie uma conta em [google.com/analytics](https://analytics.google.com)
2. Copie o código de rastreamento
3. Cole no index.html (antes de `</head>`)
4. Clique em "Commit changes"

### 3. Compartilhar o Site
- Compartilhe a URL: `https://seu-usuario.github.io/amira-acessorios`
- Coloque no Instagram, WhatsApp, etc
- Comece a vender!

---

## ✅ Checklist Final

- [ ] Conta GitHub criada
- [ ] Repositório criado
- [ ] Arquivos enviados
- [ ] GitHub Pages ativado
- [ ] Site online e funcionando
- [ ] Imagens aparecem corretamente
- [ ] WhatsApp funciona
- [ ] Links de redes sociais funcionam
- [ ] Site testado no celular
- [ ] Mercado Pago integrado (opcional)

---

## 📞 Precisa de Ajuda?

Se algo não funcionar:
1. Verifique o checklist acima
2. Limpe o cache do navegador
3. Aguarde alguns minutos
4. Tente em outro navegador
5. Verifique se os nomes dos arquivos estão corretos

---

## 🎉 Parabéns!

Seu site Amira Acessórios está online e pronto para vender! 

**Agora é só:**
1. Customizar com seus dados
2. Integrar Mercado Pago
3. Compartilhar com clientes
4. Começar a vender! 💰

---

**Criado com ❤️ para Amira Acessórios**

Boa sorte! 🚀
