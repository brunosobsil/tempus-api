const { Agendamento, OrdemServico, Usuario } = require('../orm/models');

class OrdemServicoDAO {

    async obterOrdemServico(ordemServico) {
        const newOS = await OrdemServico.findByPk(ordemServico.id, {
            include: [{model: Agendamento, as: 'agendamento'}]
        });
        return newOS;
    }

    async obterOrdensServico() {
        const newOSs = await OrdemServico.findAll({
            include: [{model: Agendamento, as: 'agendamento'}]
        });
        return newOSs;
    }

    async obterOrdemServicoPorStatus(dt_inicio, dt_final, status_os) {
        const newOSss = await OrdemServico.findAll({
            include: [{model: Agendamento, as: 'agendamento'}],
            where: { data_hora_inicio: dt_inicio, data_hora_final: dt_final, status: status_os }
        });
        return newOSss;
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