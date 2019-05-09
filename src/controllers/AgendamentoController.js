const Agendamento = require('../model/entities/Agendamento');
const AgendamentoBO = require('../model/bo/AgendamentoBO');

class AgendamentoController {

    async obterAgendamento(req, res) {

        if (req.params.id) {
            // Obter agendamento por ID 
            let agendamento = new Agendamento();
            agendamento.id = req.params.id;
            agendamento = await AgendamentoBO.obterAgendamento(agendamento);
            res.send(agendamento);

        } else {
            // Obter todas as agendamentos
            let agendamentos = await AgendamentoBO.obterAgendamentos();
            res.send(agendamentos);
        }

    }

    async incluirAgendamento(req, res) {

        let agendamento = new Agendamento(null, req.body.data_sugerida);
        let id = await AgendamentoBO.incluirAgendamento(agendamento);

        res.status(201).json({
            status: req.body.status,
            message: 'agendamento inserido com sucesso',
            id: id
        });

    }

    async alterarAgendamento(req, res) {

        let agendamento = new Agendamento(req.params.id, req.body.data_sugerida);
        await AgendamentoBO.alterarAgendamento(agendamento);

        res.status(200).json({
            status: req.body.status,
            message: 'agendamento atualizado com sucesso'
        });

    }

    async excluirAgendamento(req, res) {

        if (req.params.id) {
            let agendamento = new Agendamento();
            agendamento.id = req.params.id;
            await AgendamentoBO.excluirAgendamento(agendamento);

            res.status(200).json({
                status: req.body.status,
                message: 'agendamento excluido com sucesso.'
            });
        }

    }

}

module.exports = AgendamentoController;