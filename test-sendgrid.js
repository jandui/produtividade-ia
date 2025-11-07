require('dotenv').config();
const sgMail = require('@sendgrid/mail');

console.log('====================================');
console.log('TESTE DE CONFIGURAÇÃO SENDGRID');
console.log('====================================\n');

// Verificar variáveis de ambiente
console.log('1. Verificando variáveis de ambiente:');
console.log('   - SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? '✅ Configurada' : '❌ NÃO CONFIGURADA');
console.log('   - SENDGRID_FROM_EMAIL:', process.env.SENDGRID_FROM_EMAIL || '❌ NÃO CONFIGURADA');
console.log('   - SENDGRID_FROM_NAME:', process.env.SENDGRID_FROM_NAME || '❌ NÃO CONFIGURADA');
console.log('');

if (!process.env.SENDGRID_API_KEY) {
    console.error('❌ ERRO: SENDGRID_API_KEY não está configurada no arquivo .env');
    process.exit(1);
}

if (!process.env.SENDGRID_FROM_EMAIL) {
    console.error('❌ ERRO: SENDGRID_FROM_EMAIL não está configurada no arquivo .env');
    process.exit(1);
}

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log('2. Testando envio de email...\n');

const msg = {
    to: process.env.SENDGRID_FROM_EMAIL, // Envia para o próprio email de teste
    from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: process.env.SENDGRID_FROM_NAME || 'Produtividade Exponencial'
    },
    subject: '✅ Teste de Configuração SendGrid - Funcionando!',
    html: `
        <div style="font-family: Arial, sans-serif; padding: 40px; text-align: center;">
            <h1 style="color: #28a745;">🎉 SendGrid Configurado com Sucesso!</h1>
            <p style="font-size: 18px; color: #555;">
                Se você está vendo este email, significa que sua configuração do SendGrid está 100% funcional!
            </p>
            <div style="background: #f0f0f0; padding: 20px; border-radius: 10px; margin: 30px 0;">
                <h3>Configurações Detectadas:</h3>
                <p><strong>From Email:</strong> ${process.env.SENDGRID_FROM_EMAIL}</p>
                <p><strong>From Name:</strong> ${process.env.SENDGRID_FROM_NAME}</p>
            </div>
            <p style="color: #888; font-size: 14px;">
                Teste realizado em: ${new Date().toLocaleString('pt-BR')}
            </p>
        </div>
    `,
    text: 'Se você está vendo este email, significa que sua configuração do SendGrid está funcionando!'
};

console.log('   Enviando email de teste para:', msg.to);
console.log('   De (From):', msg.from.email);
console.log('');

sgMail
    .send(msg)
    .then(() => {
        console.log('✅ EMAIL ENVIADO COM SUCESSO!\n');
        console.log('📧 Verifique sua caixa de entrada:');
        console.log('   Email:', process.env.SENDGRID_FROM_EMAIL);
        console.log('');
        console.log('⚠️  IMPORTANTE:');
        console.log('   - Verifique também a pasta SPAM/Lixo Eletrônico');
        console.log('   - Se não recebeu, o email', process.env.SENDGRID_FROM_EMAIL);
        console.log('     precisa estar verificado no SendGrid (Sender Authentication)');
        console.log('');
        console.log('📖 Guia completo em: SENDGRID.md');
        console.log('');
        process.exit(0);
    })
    .catch((error) => {
        console.error('❌ ERRO AO ENVIAR EMAIL:\n');

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Mensagem:', error.response.body.errors);
            console.error('');

            // Erros comuns
            if (error.response.status === 401) {
                console.error('🔴 PROBLEMA: API Key inválida ou sem permissões');
                console.error('');
                console.error('SOLUÇÃO:');
                console.error('1. Verifique se a API Key no .env está correta');
                console.error('2. Crie uma nova API Key em: https://app.sendgrid.com/settings/api_keys');
                console.error('3. Use "Full Access" ou permissão de envio (Mail Send)');
            } else if (error.response.status === 403) {
                console.error('🔴 PROBLEMA: Email não verificado (Sender Identity)');
                console.error('');
                console.error('SOLUÇÃO:');
                console.error('1. Acesse: https://app.sendgrid.com/settings/sender_auth');
                console.error('2. Clique em "Verify a Single Sender"');
                console.error('3. Adicione o email:', process.env.SENDGRID_FROM_EMAIL);
                console.error('4. Confirme no email que receberá');
                console.error('');
                console.error('📖 Veja o passo a passo completo em: SENDGRID.md (Seção 2)');
            }
        } else {
            console.error('Erro desconhecido:', error.message);
        }

        console.error('');
        process.exit(1);
    });
