const { Habilidade } = require('../orm/models');

class HabilidadeDAO {

    async obterHabilidade(habilidade) {
        const hability = await Habilidade.findById(habilidade.id);
        return hability;
    }

    async obterHabilidades() {
        const habilitys = await Habilidade.findAll();
        return habilitys;
    }

    async incluirHabilidade(habilidade) {
        await Habilidade.create({
            nome: habilidade.nome,
            descricao: habilidade.descricao
        });
    }

    async alterarHabilidade(habilidade) {
        await Habilidade.update({
            nome: habilidade.nome,
            descricao: habilidade.descricao
        },
        {
            where: { id: habilidade.id }
        });
    }

    async excluirHabilidade(habilidade) {
        await Habilidade.destroy({
            where: { id: habilidade.id }
        });
    }

}

module.exports = new HabilidadeDAO();