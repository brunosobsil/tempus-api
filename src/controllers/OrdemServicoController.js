const OrdemServico = require('../model/entities/OrdemServico');
const OrdemServicoBO = require('../model/bo/OrdemServicoBO');

const Agendamento = require('../model/entities/Agendamento');
const AgendamentoBO = require('../model/bo/AgendamentoBO');

const Projeto = require('../model/entities/Projeto');
const ProjetoBO = require('../model/bo/ProjetoBO');

const path = require('path');

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
        ordemServico = await OrdemServicoBO.incluirOrdemServico(ordemServico);

        if(agendamento.atendimento.projeto){
            // Atualiza horas do projeto
            let projeto = new Projeto();
            projeto.id = agendamento.atendimento.projeto.id;
            await ProjetoBO.calcularHorasProjeto(projeto);
        }

        res.status(201).json({
            status: req.body.status,
            message: 'ordem de servico inserida com sucesso',
            id: ordemServico
        });

    }

    async alterarOrdemServico(req, res) {

        // Obter agendamento por ID
        let agendamento = new Agendamento();
        agendamento.id = req.body.agendamento.id;
        agendamento = await AgendamentoBO.obterAgendamento(agendamento);

        let ordemServico = new OrdemServico(req.params.id, req.body.status, req.body.descricao, req.body.data_hora_inicio, req.body.data_hora_final, agendamento);
        await OrdemServicoBO.alterarOrdemServico(ordemServico);

        if(agendamento.atendimento.projeto){
            // Atualiza horas do projeto
            let projeto = new Projeto();
            projeto.id = agendamento.atendimento.projeto.id;
            await ProjetoBO.calcularHorasProjeto(projeto);
        }

        res.status(200).json({
            status: req.body.status,
            message: 'ordem de servico atualizada com sucesso'
        });

    }

    async excluirOrdemServico(req, res) {

        if (req.params.id) {
            // Obter ordem de servico por ID
            let ordemServico = new OrdemServico();
            ordemServico.id = req.params.id;
            ordemServico = await OrdemServicoBO.obterOrdemServico(ordemServico);

            // Obter agendamento por ID
            let agendamento = new Agendamento();
            agendamento.id = ordemServico.agendamento.id;
            agendamento = await AgendamentoBO.obterAgendamento(agendamento);
            
            await OrdemServicoBO.excluirOrdemServico(ordemServico);

            if(agendamento.atendimento.projeto){
                // Atualizar horas do projeto
                let projeto = new Projeto();
                projeto.id = agendamento.atendimento.projeto.id;
                await ProjetoBO.calcularHorasProjeto(projeto);
            }

            res.status(200).json({
                status: req.body.status,
                message: 'ordem de servico excluida com sucesso.'
            });

        }

    }

    async alterarStatusOrdemServico(req, res) {

        let ordemServico = new OrdemServico();
        ordemServico.id = req.params.id;
        ordemServico = await OrdemServicoBO.obterOrdemServico(ordemServico);

        ordemServico.status = req.params.status;
        await OrdemServicoBO.alterarStatusOrdemServico(ordemServico);

        res.sendFile(path.resolve("./src/template/validar-os.html"));
    }

}

module.exports = OrdemServicoController;