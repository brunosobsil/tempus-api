const { Agendamento, OrdemServico, Usuario } = require('../orm/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
        const newOSs = await OrdemServico.findAll({
            include: [{model: Agendamento, as: 'agendamento'}],
            where: {
                data_hora_inicio: {
                    [Op.gte]: dt_inicio
                },
                data_hora_final: {
                    [Op.lte]: dt_final
                },
                status: status_os
            }
        });
        return newOSs;
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

    async alterarStatusOrdemServico(ordemServico) {
        await OrdemServico.update({
            status: ordemServico.status,
        },
        {
            where: { id: ordemServico.id }
        });
    }

}

module.exports = new OrdemServicoDAO();