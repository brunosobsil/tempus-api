const nodemailer = require('nodemailer');
const fs = require('fs');
const moment = require('moment');
const path = require('path');

class NotificacaoBO {

    async enviarEmailOS(ordemServico, usuario) {

        let html = fs.readFileSync(path.resolve("./src/template/solicitar-aprovacao.html"), "utf8");
        let numero_os = ('000000'+ordemServico.id).slice(-6);

        // preenche campos
        html = html.replace('%nome_aprovador%', usuario.nome);
        html = html.replace('%numero_os%', numero_os);
        html = html.replace('%data_os%', moment(ordemServico.data_hora_inicio).format('DD/MM/YYYY')); 
        html = html.replace('%hora_inicio_os%', moment(ordemServico.data_hora_inicio).format('HH:mm'));
        html = html.replace('%hora_fim_os%', moment(ordemServico.data_hora_final).format('HH:mm'));
        html = html.replace('%descricao_os%', ordemServico.descricao);
        html = html.replace(/%id_os%/g, ordemServico.id);

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "notificacao.tempus@gmail.com ",
                pass: "tempus123"
            }
        });

        let info = await transporter.sendMail({
            from: '"Tempus" <notificacao.tempus@gmail.com>', // sender address
            to: usuario.email, // list of receivers
            subject: "Tempus - OS pronta para aprovação", // Subject line
            html: html
            
        });

        /*
        "<p>Clique bo botão que desejar:</p>" +
            "<p><a href='http://localhost:3000/aprovacao/os/1/Aprovada'>Aprovar</a></p>" +
            "<p><a href='http://localhost:3000/aprovacao/os/1/Rejeitada'>Rejeitar</a></p>"
        */

        return {info: info};

    }
}

module.exports = new NotificacaoBO();