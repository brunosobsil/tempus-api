const { OrdemServico } = require('../orm/models');

class OrdemServicoDAO {

    async obterHabilidade(ordemServico) {
        const agend = await OrdemServico.findByPk(ordemServico.id);
        return agend;
    }

    async obterOrdensServico() {
        const agends = await OrdemServico.findAll();
        return agends;
    }

    async incluirOrdemServico(ordemServico) {
        let newOS = await OrdemServico.create({
            nome: ordemServico.nome,
            descricao: ordemServico.descricao
        });

        return newOS.id;
    }

    async alterarOrdemServico(ordemServico) {
        await OrdemServico.update({
            nome: ordemServico.nome,
            descricao: ordemServico.descricao
        },
        {
            where: { id: ordemServico.id }
        });
    }

    async excluirOrdemServico(ordemServico) {
        await OrdemServico.destroy({
            where: { id: ordemServico.id }
        });
    }

    async cancelarOrdemServico(ordemServico) {
        await OrdemServico.update({
            status: ordemServico.status,
        },
        {
            where: { id: ordemServico.id }
        });
    }

}

module.exports = new OrdemServicoDAO();