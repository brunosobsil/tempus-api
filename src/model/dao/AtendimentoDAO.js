const { Atendimento, Habilidade, Usuario } = require('../orm/models');

class AtendimentoDAO {

    async obterAtendimento(atendimento) {
        const atend = await Atendimento.findByPk(atendimento.id,{
            include: [{model: Habilidade, as: 'habilidade'},{model: Usuario, as: 'usuario'}]            
        });
        return atend;
    }

    async obterAtendimentos() {
        const atends = await Atendimento.findAll({
            include: [{model: Habilidade, as: 'habilidade'},{model: Usuario, as: 'usuario'}]            
        });
        return atends;
    }

    async incluirAtendimento(atendimento) {
        let newAtendimento = await Atendimento.create({
            assunto: atendimento.assunto,
            descricao: atendimento.descricao,
            data_sugerida: atendimento.dataSugerida,
            id_habilidade: atendimento.habilidade.id,
            id_usuario: atendimento.usuario.id
        });

        return newAtendimento.id;
    }

    async alterarAtendimento(atendimento) {
        await Atendimento.update({
            assunto: atendimento.assunto,
            descricao: atendimento.descricao,
            data_sugerida: atendimento.dataSugerida,
            id_habilidade: atendimento.habilidade.id,
            id_usuario: atendimento.usuario.id
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