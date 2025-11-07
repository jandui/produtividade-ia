# Landing Page - Produtividade Exponencial

Sistema completo de funil de vendas para o ebook "Produtividade Exponencial: Como a IA Pode Revolucionar Seu Trabalho".

Inclui:
- 📄 Página de vendas principal (fundo de funil)
- 🎁 Página de captura com lead magnet (topo de funil)
- ✅ Página de confirmação com upsell

## Estrutura do Projeto

```
ProdutividadeIA/
├── public/                      # Arquivos estáticos
│   ├── css/
│   │   ├── style.css           # Estilos da página de vendas
│   │   └── checklist.css       # Estilos da página de checklist
│   ├── js/
│   │   └── main.js             # Scripts JavaScript
│   ├── images/                 # Imagens (adicionar conforme necessário)
│   └── downloads/              # PDFs e downloads
│       └── checklist-10-tarefas-ia.pdf
├── views/                       # Templates EJS
│   ├── index.ejs               # Página de vendas (fundo de funil)
│   ├── checklist.ejs           # Página de captura (topo de funil)
│   └── thank-you.ejs           # Página de confirmação
├── server.js                    # Servidor Express
├── package.json                 # Dependências do projeto
├── .gitignore                  # Arquivos ignorados pelo Git
└── README.md                   # Este arquivo
```

## Tecnologias Utilizadas

- Node.js
- Express.js
- EJS (Template Engine)
- CSS3
- JavaScript (ES6+)

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina
   - [Download Node.js](https://nodejs.org/)

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Como Executar

### Modo de Desenvolvimento (com auto-reload)

```bash
npm run dev
```

### Modo de Produção

```bash
npm start
```

O servidor estará disponível em: `http://localhost:3000`

## Páginas Disponíveis

### 1. Página de Vendas (Fundo de Funil)
**URL:** `http://localhost:3000/`

Landing page completa para venda do ebook com:
- Hero section com proposta de valor
- Seção de vídeo de vendas
- Pain points (dores do cliente)
- Solução e benefícios
- Conteúdo detalhado do ebook
- Bônus exclusivos
- Depoimentos sociais
- Garantia de satisfação
- FAQ completo
- CTAs integrados com checkout da Eduzz

### 2. Página de Checklist (Topo de Funil)
**URL:** `http://localhost:3000/checklist`

Página de captura de leads com oferta de conteúdo gratuito:
- Lead magnet: "10 Tarefas que Você Pode Automatizar Hoje com IA"
- Formulário de captura (nome + email)
- Lista de benefícios do checklist
- Design limpo focado em conversão
- Validação de formulário

### 3. Página de Confirmação
**URL:** `http://localhost:3000/obrigado`

Página de agradecimento após captura do lead:
- Confirmação de email enviado
- Link de download direto do PDF
- Próximos passos
- Upsell para o ebook completo (R$ 5,90)
- CTA para página de vendas

## Personalizações Necessárias

Antes de colocar a página no ar, você precisa personalizar os seguintes elementos:

### 1. Vídeo de Vendas
No arquivo `views/index.ejs`, linha 53-59, substitua o placeholder pelo código de incorporação do seu vídeo:
```html
<div class="video-placeholder">
    <!-- Adicione aqui o código do YouTube ou Vimeo -->
</div>
```

### 2. Link de Checkout
✅ **Já configurado!** O link de checkout da Eduzz já está integrado em todos os botões CTA:
```html
<a href="https://chk.eduzz.com/o423vlrd" class="cta-button">
```

### 3. Informações de Contato
No arquivo `views/index.ejs`, linha 591, atualize o email de contato:
```html
<p>contato@seuemail.com.br</p>
```

### 4. Links do Footer
No arquivo `views/index.ejs`, linhas 586-588, adicione os links corretos para:
- Política de Privacidade
- Termos de Uso
- Contato

### 5. Imagens (Opcional)
Adicione suas imagens na pasta `public/images/` e referencie-as nos templates.

### 6. PDF do Checklist
Crie o PDF "10 Tarefas que Você Pode Automatizar Hoje com IA" e coloque em:
```
public/downloads/checklist-10-tarefas-ia.pdf
```

### 7. Integração com Email Marketing (SendGrid)

✅ **Já configurado!** O projeto está integrado com SendGrid para envio automático de emails.

**Para ativar:**

1. Siga o guia completo em **[SENDGRID.md](./SENDGRID.md)**
2. Configure suas credenciais no arquivo `.env`:
   ```env
   SENDGRID_API_KEY=SG.sua_api_key_aqui
   SENDGRID_FROM_EMAIL=seu-email@seudominio.com
   SENDGRID_FROM_NAME=Produtividade Exponencial
   ```
3. Teste o envio preenchendo o formulário em `/checklist`

**O que acontece quando alguém se cadastra:**
- ✅ Email automático com link do PDF
- ✅ Template HTML profissional e responsivo
- ✅ Personalização com nome do lead
- ✅ Instruções dos próximos passos
- ✅ Logs detalhados no console

**Outras opções de integração:**
- Mailchimp
- ConvertKit
- ActiveCampaign
- GetResponse

Consulte a documentação específica de cada plataforma para integrar.

## Recursos Implementados

### Página de Vendas:
- Design responsivo (mobile-first)
- Countdown timer de escassez
- FAQ com toggle de perguntas/respostas
- Botão flutuante de CTA
- Scroll suave para âncoras
- Integração com checkout Eduzz
- Seções otimizadas para conversão:
  - Header com proposta de valor
  - Seção de vídeo
  - Pain points (dores do cliente)
  - Benefícios da solução
  - Conteúdo do ebook
  - Bônus exclusivos
  - Depoimentos sociais
  - Garantia de satisfação
  - FAQ completo
  - CTA final com resumo de valor

### Página de Checklist (Lead Magnet):
- Design limpo e focado em conversão
- Formulário de captura otimizado
- Validação client-side
- Lista de benefícios clara
- Trust badges (segurança, sem spam)
- Preparado para integração com email marketing

### Página de Confirmação:
- Mensagem de sucesso com animação
- Instruções claras para próximos passos
- Link de download direto do PDF
- Upsell estratégico para ebook completo
- CTA para página de vendas

## Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento com nodemon

## Deploy

### Opções de Deploy:

1. **Heroku**
   - Crie uma conta no Heroku
   - Instale o Heroku CLI
   - Execute:
     ```bash
     heroku create
     git push heroku main
     ```

2. **Vercel**
   - Instale o Vercel CLI: `npm i -g vercel`
   - Execute: `vercel`

3. **Railway**
   - Conecte seu repositório GitHub
   - Railway detecta automaticamente Node.js

4. **DigitalOcean/AWS/Google Cloud**
   - Configure um servidor VPS
   - Instale Node.js
   - Clone o repositório
   - Execute `npm install && npm start`

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto para configurações sensíveis:

```env
PORT=3000
NODE_ENV=production
```

## Suporte

Para dúvidas ou problemas, entre em contato.

## Licença

Este projeto é privado e proprietário.
