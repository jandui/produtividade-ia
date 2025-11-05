# Landing Page - Produtividade Exponencial

Landing page para venda do ebook "Produtividade Exponencial: Como a IA Pode Revolucionar Seu Trabalho".

## Estrutura do Projeto

```
ProdutividadeIA/
├── public/                 # Arquivos estáticos
│   ├── css/
│   │   └── style.css      # Estilos da página
│   ├── js/
│   │   └── main.js        # Scripts JavaScript
│   └── images/            # Imagens (adicionar conforme necessário)
├── views/                 # Templates EJS
│   └── index.ejs          # Página principal
├── server.js              # Servidor Express
├── package.json           # Dependências do projeto
├── .gitignore            # Arquivos ignorados pelo Git
└── README.md             # Este arquivo
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

## Recursos Implementados

- Design responsivo (mobile-first)
- Countdown timer de escassez
- FAQ com toggle de perguntas/respostas
- Botão flutuante de CTA
- Scroll suave para âncoras
- Seções otimizadas para conversão:
  - Header com proposta de valor
  - Seção de vídeo
  - Pain points (dores do cliente)
  - Benefícios da solução
  - Conteúdo do ebook
  - Bônus exclusivos
  - Depoimentos sociais
  - Garantia de satisfação
  - FAQ
  - CTA final com resumo de valor

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
