const nodemailer = require('nodemailer');

class NotificacaoBO {

    async enviarEmailOS(ordemServico, usuario) {
        let transporter = nodemailer.createTransport({
            host: "smtplw.com.br",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "teste",
                pass: "******"
            }
        });

        let info = await transporter.sendMail({
            from: '"Tempus" <atendimento@tempus.app>', // sender address
            to: usuario.email, // list of receivers
            subject: "Tempus - OS pronta para aprovação", // Subject line
            html:   "<p>Clique bo botão que desejar:</p>" +
                    "<p><a href='http://localhost:3000/os/1/status/aprovada'>Aprovar</a></p>" +
                    "<p><a href='http://localhost:3000/os/1/status/rejeitar'>Rejeitar</a></p>"
        });

        return {info: info};

    }
}

module.exports = new NotificacaoBO();