# Site Amira Acessórios - HTML + CSS

## 📋 Informações do Projeto

- **Nome:** Amira Acessórios
- **Tipo:** Site de E-commerce (HTML + CSS puro)
- **Versão:** 1.0
- **Responsivo:** Sim (Mobile, Tablet, Desktop)
- **Compatibilidade:** Todos os navegadores modernos

---

## 📁 Arquivos Inclusos

```
amira_google_sites/
├── index.html                 # Arquivo principal do site
├── 002.webp até 008.webp     # Imagens do catálogo STYLUS
├── README.md                  # Este arquivo
└── GUIA_GOOGLE_SITES.md      # Guia para Google Sites
```

---

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Baixe todos os arquivos
2. Coloque as imagens (002.webp até 008.webp) na mesma pasta que o index.html
3. Abra o arquivo `index.html` no navegador

### Opção 2: Fazer Upload em um Servidor
1. Faça upload de todos os arquivos para seu servidor web
2. Acesse o URL do seu site

### Opção 3: Usar com GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages → Escolha a branch main
4. Seu site estará em: `https://seu-usuario.github.io/nome-do-repo`

---

## 🎨 Cores Utilizadas

| Cor | Código | Uso |
|-----|--------|-----|
| Dourado | #d4af37 | Botões, títulos, destaque |
| Preto | #1a1a1a | Header, footer, texto |
| Bege | #e8dcc8 | Destaque secundário |
| Branco | #ffffff | Fundo principal |
| Cinza | #f5f5f0 | Fundo secundário |

---

## 🔧 Customizações Principais

### 1. Alterar Logo
Procure por esta linha no HTML:
```html
<div class="logo">
    AMIRA
    <div class="logo-subtitle">Acessórios</div>
</div>
```

Substitua "AMIRA" pelo nome da sua marca.

### 2. Alterar Imagens dos Produtos
Procure pelas linhas com `<img src="00X.webp"` e substitua pelos nomes de suas imagens:
```html
<img src="sua-imagem.jpg" alt="Descrição">
```

### 3. Alterar Preços
Procure por `R$ 49,90` e substitua pelo preço desejado:
```html
<div class="product-price">R$ 49,90</div>
```

### 4. Alterar WhatsApp
Procure por `5548996377111` e substitua pelo seu número (sem caracteres especiais):
```html
https://wa.me/5548996377111?text=Olá
```

### 5. Alterar Email
Procure por `contato@amiraacessorios.com` e substitua:
```html
<a href="mailto:seu-email@exemplo.com">
```

### 6. Alterar Redes Sociais
Procure pela seção de social links:
```html
<a href="https://instagram.com/seu-usuario" title="Instagram">📷</a>
<a href="https://facebook.com/sua-pagina" title="Facebook">f</a>
```

---

## 💳 Integração Mercado Pago

### Passo 1: Criar Conta no Mercado Pago
1. Acesse [mercadopago.com.br](https://www.mercadopago.com.br)
2. Crie uma conta de vendedor
3. Verifique sua identidade

### Passo 2: Obter Link de Pagamento
1. Acesse seu painel do Mercado Pago
2. Vá em "Criar link de pagamento"
3. Configure o produto com preço R$ 49,90
4. Copie o link gerado

### Passo 3: Adicionar ao Site
Procure por esta linha no HTML:
```html
<a href="#" class="btn">Comprar</a>
```

Substitua o `#` pelo link do Mercado Pago:
```html
<a href="https://seu-link-mercado-pago.com" class="btn">Comprar</a>
```

**Exemplo completo:**
```html
<a href="https://mpago.la/seu-codigo-aqui" class="btn">Comprar</a>
```

---

## 📱 Redes Sociais

### Instagram
Procure por:
```html
<a href="https://instagram.com" title="Instagram">📷</a>
```

Substitua por:
```html
<a href="https://instagram.com/seu-usuario" title="Instagram">📷</a>
```

### Facebook
Procure por:
```html
<a href="https://facebook.com" title="Facebook">f</a>
```

Substitua por:
```html
<a href="https://facebook.com/sua-pagina" title="Facebook">f</a>
```

---

## 📧 Newsletter

O formulário de newsletter está configurado mas precisa de um backend para funcionar. Opções:

### Opção 1: Formspree (Gratuito)
1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta
3. Crie um novo formulário
4. Copie o código
5. Substitua o `action="#"` no HTML

### Opção 2: Mailchimp
1. Acesse [mailchimp.com](https://mailchimp.com)
2. Crie uma lista
3. Obtenha o código de embed
4. Adicione ao site

---

## 🖼️ Adicionar Mais Produtos

1. Copie o bloco de produto:
```html
<div class="product-card">
    <div class="product-image">
        <img src="00X.webp" alt="Nome do Produto">
    </div>
    <div class="product-info">
        <div class="product-name">Nome do Produto</div>
        <div class="product-description">Descrição do produto</div>
        <div class="product-price">R$ 49,90</div>
        <div class="product-price-pix">R$ 47,40 com Pix</div>
        <div class="product-actions">
            <a href="#" class="btn">Comprar</a>
            <a href="https://wa.me/5548996377111?text=..." class="btn btn-secondary">WhatsApp</a>
        </div>
    </div>
</div>
```

2. Cole dentro da `<div class="products-grid">`
3. Altere a imagem, nome, descrição e link

---

## 🎯 SEO - Otimizar para Buscadores

### 1. Meta Tags
Altere estas linhas no `<head>`:
```html
<meta name="description" content="Descrição do seu site">
<meta name="keywords" content="bijuterias, acessórios, folheados">
<title>Amira Acessórios - Loja Virtual</title>
```

### 2. Adicionar Google Analytics
Adicione antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=SEU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'SEU-ID-AQUI');
</script>
```

### 3. Adicionar Sitemap
Crie um arquivo `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-site.com/</loc>
    <lastmod>2025-10-29</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 🔒 Segurança

### HTTPS
Certifique-se de que seu site usa HTTPS (não HTTP). Se usar GitHub Pages, é automático.

### Validação de Formulário
O formulário de newsletter já possui validação básica. Para mais segurança, use um serviço como Formspree.

---

## 📊 Performance

### Otimizações Já Implementadas
- ✅ CSS minificado
- ✅ Imagens em formato WebP (leve)
- ✅ Design responsivo
- ✅ Sem dependências externas

### Melhorias Opcionais
1. Comprimir imagens ainda mais
2. Adicionar lazy loading
3. Minificar JavaScript
4. Usar CDN para imagens

---

## 🐛 Troubleshooting

### Imagens não aparecem
- Verifique se os arquivos .webp estão na mesma pasta
- Verifique os nomes dos arquivos (case-sensitive)
- Tente usar .jpg ou .png em vez de .webp

### WhatsApp não funciona
- Verifique se o número está correto (sem caracteres especiais)
- Teste o link: `https://wa.me/5548996377111`

### Site não fica responsivo
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Teste em outro navegador
- Verifique se a meta tag viewport está presente

---

## 📞 Suporte

Para dúvidas sobre o site:
- WhatsApp: 48 99637711
- Email: contato@amiraacessorios.com

---

## 📄 Licença

Este site foi criado especificamente para Amira Acessórios. Todos os direitos reservados.

---

## ✅ Checklist de Lançamento

- [ ] Alterar logo e nome
- [ ] Adicionar todas as imagens dos produtos
- [ ] Alterar preços (se necessário)
- [ ] Configurar links do Mercado Pago
- [ ] Adicionar número do WhatsApp
- [ ] Adicionar links das redes sociais
- [ ] Configurar newsletter
- [ ] Testar em mobile
- [ ] Testar links de pagamento
- [ ] Testar WhatsApp
- [ ] Fazer upload para servidor
- [ ] Testar site ao vivo
- [ ] Adicionar Google Analytics
- [ ] Compartilhar com clientes

---

**Criado com ❤️ para Amira Acessórios**
