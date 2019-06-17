const { Agendamento, Atendimento, Usuario } = require('../orm/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class AgendamentoDAO {

    async obterAgendamento(agendamento) {
        const agend = await Agendamento.findByPk(agendamento.id, {
            //include: [{model: Atendimento, as: 'atendimento'},{model: Usuario, as: 'usuario'}]
            include: [{ all: true, nested: true }]
        });
        return agend;
    }

    async obterAgendamentos() {
        const agends = await Agendamento.findAll({
            //include: [{model: Atendimento, as: 'atendimento'},{model: Usuario, as: 'usuario'}]
            include: [{ all: true, nested: true }]
        });
        return agends;
    }

    async obterAgendamentosPorPeriodo(data_inicial, data_final) {
        const agends = await Agendamento.findAll({
            where: {
                data_hora_agendamento: {
                    [Op.between]: [data_inicial, data_final]
                }
            },
            //include: [{model: Atendimento, as: 'atendimento'},{model: Usuario, as: 'usuario'}]
            include: [{ all: true, nested: true }]
        });

        return agends;
    }

    async obterAgendamentosPorAtendimento(atendimento) {
        const agends = await Agendamento.findAll({
            where: {
                id_atendimento: atendimento.id
            },
            include: [{ all: true, nested: true }]
        });
        return agends;
    }

    async verificarDisponibilidade(usuario, data_inicial, data_final) {
        const agends = await Agendamento.findOne({
            where: {
                id_usuario: usuario.id,
                data_hora_agendamento: {
                    [Op.between]: [data_inicial, data_final]
                }
            },
            //include: [{model: Atendimento, as: 'atendimento'},{model: Usuario, as: 'usuario'}]
            include: [{ all: true, nested: true }]
        });

        return agends;
    }

    async incluirAgendamento(agendamento) {        
        
        let newAgendamento = await Agendamento.create({
            data_hora_agendamento: agendamento.data_hora_agendamento,
            id_atendimento: agendamento.atendimento.id,
            id_usuario: agendamento.usuario.id
        });

        return newAgendamento.id;
    }

    async alterarAgendamento(agendamento) {
        await Agendamento.update({
            data_hora_agendamento: agendamento.data_hora_agendamento,
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