const OrdemServico = require('../model/entities/OrdemServico');
const OrdemServicoBO = require('../model/bo/OrdemServicoBO');

const Agendamento = require('../model/entities/Agendamento');
const AgendamentoBO = require('../model/bo/AgendamentoBO');

class OrdemServicoController {

    async obterOrdemServico(req, res) {

        if (req.params.id) {
            // Obter ordem de servico por ID
            let ordemServico = new OrdemServico();
            ordemServico.id = req.params.id;
            ordemServico = await OrdemServicoBO.obterOrdemServico(ordemServico);
            res.send(ordemServico);

        } else {
            // Obter todas as ordens de Servicos
            let ordensServico = await OrdemServicoBO.obterOrdensServico();
            res.send(ordensServico);
        }

    }

    async incluirOrdemServico(req, res) {

        // Obter agendamento por ID
        let agendamento = new Agendamento();
        agendamento.id = req.body.agendamento.id;
        agendamento = await AgendamentoBO.obterAgendamento(agendamento);

        let ordemServico = new OrdemServico(null, req.body.status, req.body.descricao, req.body.data_hora_inicio, req.body.data_hora_final, agendamento);
        let id = await OrdemServicoBO.incluirOrdemServico(ordemServico);

        res.status(201).json({
            status: req.body.status,
            message: 'ordem de servico inserida com sucesso',
            id: id
        });

    }

    async alterarOrdemServico(req, res) {

        // Obter agendamento por ID
        let agendamento = new Agendamento();
        agendamento.id = req.body.agendamento.id;
        agendamento = await AgendamentoBO.obterAgendamento(agendamento);

        let ordemServico = new OrdemServico(req.params.id, req.body.status, req.body.descricao, req.body.data_hora_inicio, req.body.data_hora_final, agendamento);
        await OrdemServicoBO.alterarOrdemServico(ordemServico);

        res.status(200).json({
            status: req.body.status,
            message: 'ordem de servico atualizada com sucesso'
        });

    }

    async excluirOrdemServico(req, res) {

        if (req.params.id) {
            let ordemServico = new OrdemServico();
            ordemServico.id = req.params.id;
            await OrdemServicoBO.excluirOrdemServico(ordemServico);

            res.status(200).json({
                status: req.body.status,
                message: 'ordem de servico excluida com sucesso.'
            });
        }

    }

    async cancelarOrdemServico(req, res) {

        let ordemServico = new OrdemServico()
        ordemServico.id = req.params.id;
        ordemServico = await OrdemServicoBO.obterOrdemServico(usuario);
        await OrdemServicoBO.cancelarOrdemServico(ordemServico);

        res.status(200).json({
            status: req.body.status,
            message: 'ordem de servico cancelada com sucesso'
        });
        
    }

}

module.exports = OrdemServicoController;