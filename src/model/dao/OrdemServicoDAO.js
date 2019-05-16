const { Agendamento, OrdemServico, Usuario } = require('../orm/models');

class OrdemServicoDAO {

    async obterOrdemServico(ordemServico) {
        const agend = await OrdemServico.findByPk(ordemServico.id, {
            include: [{model: Agendamento, as: 'agendamento'}, {model: Usuario, as: 'usuario'}]
        });
        return agend;
    }

    async obterOrdensServico() {
        const agends = await OrdemServico.findAll({
            include: [{model: Agendamento, as: 'agendamento'}, {model: Usuario, as: 'usuario'}]
        });
        return agends;
    }

    async incluirOrdemServico(ordemServico) {
        let newOS = await OrdemServico.create({
            descricao: ordemServico.descricao,
            data_hora_inicio: ordemServico.dataHoraInicio,
            data_hora_final: ordemServico.dataHoraFinal,
            status: ordemServico.status,
            id_agendamento: ordemServico.agendamento.id
        });

        return newOS.id;
    }

    async alterarOrdemServico(ordemServico) {
        await OrdemServico.update({
            descricao: ordemServico.descricao,
            data_hora_inicio: ordemServico.dataHoraInicio,
            data_hora_final: ordemServico.dataHoraFinal,
            status: ordemServico.status,
            id_agendamento: ordemServico.agendamento.id
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