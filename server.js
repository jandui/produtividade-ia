require('dotenv').config();
const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Middleware para processar dados de formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Função para gerar o HTML do email
function gerarEmailHTML(nome) {
    const pdfUrl = process.env.PDF_DOWNLOAD_URL || `${process.env.BASE_URL}/downloads/checklist-10-tarefas-ia.pdf`;

    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu Checklist Gratuito</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">

                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px;">🎉 Parabéns, ${nome}!</h1>
                            <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px;">Seu checklist está pronto para download</p>
                        </td>
                    </tr>

                    <!-- Conteúdo -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333; line-height: 1.6;">
                                Olá <strong>${nome}</strong>,
                            </p>
                            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333; line-height: 1.6;">
                                Obrigado por baixar nosso <strong>"Checklist: 10 Tarefas que Você Pode Automatizar Hoje com IA"</strong>!
                            </p>
                            <p style="margin: 0 0 30px 0; font-size: 16px; color: #333; line-height: 1.6;">
                                Este material vai ajudá-lo a economizar <strong>10+ horas por semana</strong> automatizando tarefas repetitivas com ferramentas de IA.
                            </p>

                            <!-- Botão de Download -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center" style="padding: 20px 0;">
                                        <a href="${pdfUrl}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 18px 40px; border-radius: 10px; font-size: 18px; font-weight: bold;">
                                            📥 BAIXAR MEU CHECKLIST
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Próximos Passos -->
                            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin: 30px 0;">
                                <h3 style="margin: 0 0 15px 0; color: #333; font-size: 18px;">🚀 Próximos Passos:</h3>
                                <ol style="margin: 0; padding-left: 20px; color: #555;">
                                    <li style="margin-bottom: 10px;">Baixe e leia o checklist</li>
                                    <li style="margin-bottom: 10px;">Escolha 1-2 tarefas para começar hoje</li>
                                    <li style="margin-bottom: 10px;">Use os prompts prontos fornecidos</li>
                                    <li style="margin-bottom: 0;">Meça o tempo economizado</li>
                                </ol>
                            </div>

                            <p style="margin: 20px 0 0 0; font-size: 16px; color: #333; line-height: 1.6;">
                                <strong>Dica Pro:</strong> Não tente implementar tudo de uma vez. Comece com as tarefas que você faz com mais frequência!
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; text-align: center; background-color: #f8f9fa; border-radius: 0 0 10px 10px;">
                            <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">
                                Tem dúvidas? Responda este email que vamos te ajudar!
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #999;">
                                © 2025 Produtividade Exponencial. Todos os direitos reservados.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
}

// Rota principal (página de vendas)
app.get('/', (req, res) => {
    res.render('index');
});

// Rota da página de checklist (topo de funil)
app.get('/checklist', (req, res) => {
    res.render('checklist');
});

// Rota para processar o formulário de checklist
app.post('/checklist/submit', async (req, res) => {
    const { nome, email, newsletter } = req.body;

    console.log('Novo lead capturado:', { nome, email, newsletter });

    // Configurar email
    const msg = {
        to: email,
        from: {
            email: process.env.SENDGRID_FROM_EMAIL,
            name: process.env.SENDGRID_FROM_NAME || 'Produtividade Exponencial'
        },
        subject: '🎁 Seu Checklist Gratuito de IA está aqui!',
        html: gerarEmailHTML(nome),
        text: `Olá ${nome}, obrigado por baixar nosso checklist! Acesse: ${process.env.PDF_DOWNLOAD_URL}`
    };

    try {
        // Enviar email via SendGrid
        await sgMail.send(msg);
        console.log(`Email enviado com sucesso para ${email}`);

        // Aqui você pode adicionar o lead à sua lista de email marketing
        // ou salvar em um banco de dados

        // Redireciona para página de obrigado
        res.redirect('/obrigado');
    } catch (error) {
        console.error('Erro ao enviar email:', error);

        if (error.response) {
            console.error('Detalhes do erro:', error.response.body);
        }

        // Mesmo com erro no email, redireciona para obrigado
        // (o usuário ainda pode baixar pela página)
        res.redirect('/obrigado');
    }
});

// Rota da página de obrigado
app.get('/obrigado', (req, res) => {
    res.render('thank-you');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
