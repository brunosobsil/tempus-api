const { Agendamento } = require('../orm/models');

class AgendamentoDAO {

    async obterAgendamento(agendamento) {
        const agend = await Agendamento.findById(agendamento.id);
        return agend;
    }

    async obterAgendamentos() {
        const agends = await Agendamento.findAll();
        return agends;
    }

    async incluirAgendamento(agendamento) {
        let newAgendamento = await Agendamento.create({
            nome: agendamento.nome,
            descricao: agendamento.descricao
        });

        return newAgendamento.id;
    }

    async alterarAgendamento(agendamento) {
        await Agendamento.update({
            nome: agendamento.nome,
            descricao: agendamento.descricao
        },
        {
            where: { id: agendamento.id }
        });
    }

    async excluirAgendamento(agendamento) {
        let agend = await this.obterAgendamento(agendamento);
        agend.status = agendamento.status;
        await agend.save();
    }

}

module.exports = new AgendamentoDAO();