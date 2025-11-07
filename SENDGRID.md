# Configuração do SendGrid

Guia completo para configurar o envio automático de emails com SendGrid.

## 📋 O que você vai precisar

- Conta no SendGrid (gratuita até 100 emails/dia)
- Domínio próprio (ou pode usar email pessoal para testes)
- 15 minutos para configuração

## 🚀 Passo a Passo

### 1. Criar Conta no SendGrid

1. Acesse: https://signup.sendgrid.com/
2. Crie sua conta gratuita
3. Confirme seu email
4. Complete o questionário inicial da SendGrid

**Plano Gratuito:**
- ✅ 100 emails por dia (permanentemente grátis)
- ✅ Perfeito para começar
- ✅ Sem cartão de crédito necessário

### 2. Verificar seu Email/Domínio (Sender Authentication)

**Opção A: Single Sender Verification (Mais Fácil - para testes)**

1. No painel do SendGrid, vá em **Settings** > **Sender Authentication**
2. Clique em **Verify a Single Sender**
3. Preencha o formulário:
   - From Name: `Produtividade Exponencial` (ou seu nome)
   - From Email Address: seu-email@gmail.com (pode ser Gmail, Yahoo, etc)
   - Reply To: mesmo email
   - Preencha os outros campos
4. Clique em **Create**
5. Verifique seu email e clique no link de confirmação

**Opção B: Domain Authentication (Recomendado para produção)**

1. No painel do SendGrid, vá em **Settings** > **Sender Authentication**
2. Clique em **Authenticate Your Domain**
3. Escolha seu provedor de DNS (Cloudflare, GoDaddy, etc)
4. Digite seu domínio (exemplo: seudominio.com)
5. Siga as instruções para adicionar os registros DNS
6. Aguarde verificação (pode levar até 48h)

### 3. Criar API Key

1. No painel do SendGrid, vá em **Settings** > **API Keys**
2. Clique em **Create API Key**
3. Escolha **Full Access** (ou Restricted Access com permissão de envio)
4. Dê um nome: `produtividade-ia-app`
5. Clique em **Create & View**
6. **COPIE A API KEY AGORA** (você não verá novamente!)
   - Começa com `SG.` seguido de uma string longa
   - Exemplo: `SG.abc123xyz789...`

### 4. Configurar Variáveis de Ambiente

Edite o arquivo `.env` no projeto:

```env
# SendGrid - Email Marketing
SENDGRID_API_KEY=SG.sua_api_key_copiada_aqui
SENDGRID_FROM_EMAIL=seu-email@seudominio.com
SENDGRID_FROM_NAME=Produtividade Exponencial

# URLs
BASE_URL=http://localhost:3000
PDF_DOWNLOAD_URL=http://localhost:3000/downloads/checklist-10-tarefas-ia.pdf
```

**IMPORTANTE:**
- ✅ Use o mesmo email que você verificou no passo 2
- ✅ Não compartilhe a API Key com ninguém
- ✅ Não faça commit do arquivo `.env` no Git (já está no .gitignore)

### 5. Testar o Envio

1. Certifique-se de que o servidor está rodando:
   ```bash
   npm start
   ```

2. Acesse: http://localhost:3000/checklist

3. Preencha o formulário com:
   - **Nome:** Seu nome
   - **Email:** Seu email pessoal (para receber o teste)
   - Clique em "QUERO MEU CHECKLIST GRATUITO"

4. Verifique:
   - ✅ Console do servidor deve mostrar "Email enviado com sucesso"
   - ✅ Você deve receber o email em alguns segundos
   - ✅ Verifique também a pasta SPAM

### 6. Verificar Estatísticas

No painel do SendGrid:
- **Activity** > **Activity Feed**: veja emails enviados em tempo real
- **Stats**: métricas de entregas, aberturas, cliques

## 🎨 Personalizando o Email

O template de email está em `server.js` na função `gerarEmailHTML()`.

**Para customizar:**

1. Abra `server.js`
2. Encontre a função `gerarEmailHTML` (linha ~24)
3. Edite o HTML conforme necessário
4. Reinicie o servidor

**Elementos personalizáveis:**
- Cores do gradiente
- Logo/imagem de cabeçalho
- Textos
- Call-to-action (CTA)
- Footer

## 🔧 Problemas Comuns

### Erro: "The from email does not match a verified Sender Identity"

**Solução:** O email em `SENDGRID_FROM_EMAIL` precisa ser verificado no SendGrid.
- Vá em Settings > Sender Authentication
- Verifique o email ou domínio

### Erro: "Unauthorized"

**Solução:** API Key inválida ou sem permissões.
- Crie uma nova API Key
- Certifique-se de copiar corretamente para o `.env`

### Email não chega

**Soluções:**
1. Verifique a pasta de SPAM
2. Confira o Activity Feed no SendGrid para ver se foi enviado
3. Teste com outro email
4. Verifique se o domínio está autenticado (Domain Authentication)

### Limite de 100 emails/dia excedido

**Soluções:**
- Aguarde 24h para resetar o limite
- Upgrade para plano pago (a partir de $19.95/mês para 40k emails)

## 📊 Limites do Plano Gratuito

| Recurso | Limite Gratuito |
|---------|----------------|
| Emails/dia | 100 |
| Validade | Permanente |
| API Access | ✅ Sim |
| Analytics | ✅ Básico |
| Templates | ✅ Ilimitado |

## 🔐 Segurança

**Boas práticas:**

1. ✅ Nunca exponha sua API Key publicamente
2. ✅ Use variáveis de ambiente (.env)
3. ✅ Não faça commit do .env no Git
4. ✅ Rotacione API Keys regularmente
5. ✅ Use Restricted Access em produção (permissão mínima necessária)

## 🚀 Próximos Passos

Após configurar o SendGrid, você pode:

1. **Adicionar mais automações:**
   - Email de boas-vindas
   - Sequência de emails (drip campaign)
   - Email de recuperação (se não baixou)

2. **Integrar com lista de email marketing:**
   - Adicionar subscriber à lista do SendGrid
   - Ou integrar com Mailchimp, ConvertKit, etc.

3. **Adicionar tracking:**
   - Click tracking
   - Open tracking
   - Unsubscribe management

4. **Usar templates do SendGrid:**
   - Criar templates visuais no painel
   - Usar dynamic templates

## 📚 Recursos Adicionais

- [Documentação oficial do SendGrid](https://docs.sendgrid.com/)
- [Node.js SDK do SendGrid](https://github.com/sendgrid/sendgrid-nodejs)
- [Exemplos de código](https://docs.sendgrid.com/for-developers/sending-email/v3-nodejs-code-example)

## 💡 Dicas Pro

1. **Personalize o nome do remetente** para aumentar taxa de abertura
2. **Use subject lines chamativas** (teste A/B)
3. **Mantenha emails curtos e objetivos**
4. **Sempre inclua CTA claro**
5. **Teste em diferentes clientes de email** (Gmail, Outlook, etc)
6. **Monitore métricas** (taxa de abertura, cliques, bounces)

---

## ❓ Precisa de Ajuda?

Se encontrar problemas:
1. Verifique o console do servidor para erros
2. Confira o Activity Feed no SendGrid
3. Revise este guia passo a passo
4. Consulte a documentação oficial

Boa sorte com seus emails! 📧✨
