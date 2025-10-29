# Amira Acessórios - Guia do Usuário

## Bem-vindo à Amira Acessórios

**Acesso:** Site público - nenhuma autenticação necessária para navegar

**Propósito:** Loja virtual de bijuterias e folheados femininos com pagamento seguro via Mercado Pago

---

## Powered by Manus

**Tech Stack:**
- **Frontend:** React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui
- **Backend:** Express 4 + tRPC 11 + Node.js
- **Database:** MySQL com Drizzle ORM
- **Autenticação:** Manus OAuth integrado
- **Pagamentos:** Mercado Pago (Pix, Cartão, Boleto)
- **Armazenamento:** S3 para imagens de produtos
- **Deployment:** Auto-scaling infrastructure com global CDN

---

## Usando Seu Site

### 1. Explorar Produtos

Clique em **"Catálogo"** na navegação para ver todos os produtos disponíveis. Você pode:
- **Filtrar por categoria** usando o painel de filtros na esquerda
- **Ordenar por preço** (menor ou maior) ou produtos mais recentes
- **Ver detalhes do produto** clicando no card do produto

### 2. Visualizar Detalhes do Produto

Na página de detalhes, você encontrará:
- Fotos do produto em alta qualidade
- Descrição completa
- Preço e disponibilidade em estoque
- Avaliação com estrelas
- Seletor de quantidade
- Botão **"Adicionar ao Carrinho"**

### 3. Comprar Produtos

**Passo 1:** Clique em **"Adicionar ao Carrinho"** na página do produto
**Passo 2:** Acesse seu carrinho clicando no ícone de carrinho na navegação
**Passo 3:** Revise os itens, ajuste quantidades ou remova produtos
**Passo 4:** Clique em **"Ir para Checkout"**
**Passo 5:** Preencha seus dados pessoais e endereço de entrega
**Passo 6:** Escolha a forma de pagamento:
  - **Pix:** Transferência instantânea
  - **Cartão de Crédito:** Parcelado em até 12x
  - **Boleto:** Vencimento em 3 dias
**Passo 7:** Clique em **"Finalizar Compra"** para processar o pagamento

### 4. Conhecer a Marca

Clique em **"Sobre"** para ler sobre a história da Amira Acessórios, nossos valores e por que nos escolher.

### 5. Entrar em Contato

Clique em **"Contato"** para:
- Enviar uma mensagem via formulário
- Conectar via WhatsApp
- Seguir no Instagram ou Facebook
- Enviar email direto

---

## Gerenciando Seu Site

### Painel de Controle (Management UI)

Acesse o painel clicando no ícone de menu no canto superior direito:

**Settings (Configurações)**
- Alterar nome do site e logo
- Gerenciar variáveis de ambiente (Secrets)
- Configurar domínios personalizados

**Database (Banco de Dados)**
- Visualizar e gerenciar produtos
- Consultar pedidos dos clientes
- Editar informações de produtos

**Dashboard (Painel)**
- Visualizar estatísticas de visitantes
- Acompanhar vendas
- Monitorar performance do site

**Code (Código)**
- Baixar todos os arquivos do projeto
- Acessar estrutura do projeto

---

## Funcionalidades Principais

### Catálogo Dinâmico
O site exibe todos os produtos cadastrados no banco de dados. Adicione novos produtos através do painel de administração.

### Carrinho de Compras
Adicione produtos, ajuste quantidades, e veja o total em tempo real. O carrinho é salvo por usuário autenticado.

### Checkout Seguro
Formulário completo com validação de dados. Integração com Mercado Pago para múltiplas formas de pagamento.

### Responsivo
O site se adapta perfeitamente a qualquer dispositivo - desktop, tablet ou smartphone.

### SEO Otimizado
Meta tags e descrições otimizadas para melhor visibilidade nos mecanismos de busca.

---

## Próximos Passos

**Converse com Manus AI a qualquer momento para:**
- Adicionar novos produtos
- Modificar cores, texto ou layout
- Integrar novas funcionalidades
- Resolver problemas ou bugs
- Otimizar performance

**Ações Recomendadas:**
1. Adicionar produtos de exemplo ao catálogo
2. Configurar suas credenciais do Mercado Pago
3. Personalizar textos e imagens conforme sua marca
4. Testar o fluxo de compra completo
5. Publicar o site e começar a vender!

---

## Suporte

Para dúvidas ou problemas, entre em contato através do WhatsApp ou email fornecidos no site. Estamos aqui para ajudar!

**Mercado Pago:** Certifique-se de ter suas chaves de API configuradas em Settings → Secrets antes de aceitar pagamentos reais.
