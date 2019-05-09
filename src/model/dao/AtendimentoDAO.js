const { Atendimento } = require('../orm/models');

class AtendimentoDAO {

    async obterAtendimento(atendimento) {
        const atend = await Atendimento.findByPk(atendimento.id);
        return atend;
    }

    async obterAtendimentos() {
        const atends = await Atendimento.findAll();
        return atends;
    }

    async incluirAtendimento(atendimento) {
        let newAtendimento = await Atendimento.create({
            assunto: atendimento.assunto,
            descricao: atendimento.descricao,
            data_sugerida: atendimento.data_sugerida,
            usuario: atendimento.usuario
        });

        return newAtendimento.id;
    }

    async alterarAtendimento(atendimento) {
        await Atendimento.update({
            assunto: atendimento.assunto,
            descricao: atendimento.descricao,
            data_sugerida: atendimento.data_sugerida,
            usuario: atendimento.usuario
        },
        {
            where: { id: atendimento.id }
        });
    }

    async excluirAtendimento(atendimento) {   
        await Atendimento.destroy({
            where: {
               id: atendimento.id
            }
        });
    }

}

module.exports = new AtendimentoDAO();