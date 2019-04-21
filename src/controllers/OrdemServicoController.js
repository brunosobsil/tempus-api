const OrdemServico = require('../model/entities/OrdemServico');
const OrdemServicoBO = require('../model/bo/OrdemServicoBO');

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

        let ordemServico = new OrdemServico(null, req.body.nome, req.body.descricao);
        await OrdemServicoBO.incluirOrdemServico(ordemServico);
        res.status(201).json({
            status: req.body.status,
            message: 'ordem de servico inserida com sucesso'
        });

    }

    async alterarOrdemServico(req, res) {

        let ordemServico = new OrdemServico(req.params.id, req.body.nome, req.body.descricao);
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