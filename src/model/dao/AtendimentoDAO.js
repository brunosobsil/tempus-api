const { Atendimento } = require('../orm/models');

class AtendimentoDAO {
    async obterAtendimento(atendimento) {
        const atend = await Atendimento.findById(atendimento.id);
        return atend;
    }

    async obterAtendimentos() {
        const atends = await Atendimento.findAll();
        return atends;
    }

    async incluirAtendimento(atendimento) {
        await Atendimento.create({
            nome: atendimento.nome,
            descricao: atendimento.descricao
        });
    }

    async alterarAtendimento(atendimento) {
        await Atendimento.update(
            {
                nome: atendimento.nome,
                descricao: atendimento.descricao
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