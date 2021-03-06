const { Agendamento, Atendimento, Usuario } = require('../orm/models');

class AgendamentoDAO {

    async obterAgendamento(agendamento) {
        const agend = await Agendamento.findByPk(agendamento.id, {
            include: [{model: Atendimento, as: 'atendimento'},{model: Usuario, as: 'usuario'}]
        });
        return agend;
    }

    async obterAgendamentos() {
        const agends = await Agendamento.findAll({
            include: [{model: Atendimento, as: 'atendimento'},{model: Usuario, as: 'usuario'}]
        });
        return agends;
    }

    async incluirAgendamento(agendamento) {
        let newAgendamento = await Agendamento.create({
            data_hora_agendamento: agendamento.dataHoraAgendamento,
            id_atendimento: agendamento.atendimento.id,
            id_usuario: agendamento.usuario.id
        });

        return newAgendamento.id;
    }

    async alterarAgendamento(agendamento) {
        await Agendamento.update({
            data_hora_agendamento: agendamento.dataHoraAgendamento,
            id_atendimento: agendamento.atendimento.id,
            id_usuario: agendamento.usuario.id
        },
        {
            where: { id: agendamento.id }
        });
    }

    async excluirAgendamento(agendamento) {
        await Agendamento.destroy({
            where: {
               id: agendamento.id
            }
        });
    }

}

module.exports = new AgendamentoDAO();