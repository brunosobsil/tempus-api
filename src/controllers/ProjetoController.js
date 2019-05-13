const Projeto = require('../model/entities/Projeto');
const ProjetoBO = require('../model/bo/ProjetoBO');

const Atendimento = require('../model/entities/Atendimento');
const AtendimentoBO = require('../model/bo/AtendimentoBO');

class ProjetoController {

    async obterProjeto(req, res) {

        if (req.params.id) {
            // Obter projeto por ID 
            let projeto = new Projeto();
            projeto.id = req.params.id;
            projeto = await ProjetoBO.obterProjeto(projeto);
            res.send(projeto);

        } else {
            // Obter todos os projetos
            let projetos = await ProjetoBO.obterProjetos();
            res.send(projetos);
        }

    }

    async incluirProjeto(req, res) {
        // Obter atendimento por ID
        let atendimento = new Atendimento();
        atendimento.id = req.body.id_atendimento;
        atendimento = await AtendimentoBO.obterAtendimento(atendimento);

        let projeto = new Projeto(null, req.body.nome, req.body.descricao_atividades, req.body.horas_estimadas, req.body.horas_realizadas, atendimento);
        let id = await ProjetoBO.incluirProjeto(projeto);
        
        res.status(201).json({
            status: req.body.status,
            message: 'projeto inserido com sucesso',
            id: id
        });

    }

    async alterarProjeto(req, res) {

        // Obter atendimento por ID
        let atendimento = new Atendimento();
        atendimento.id = req.body.id_atendimento;
        atendimento = await AtendimentoBO.obterAtendimento(atendimento);

        let projeto = new Projeto(req.params.id, req.body.nome, req.body.descricao_atividades, req.body.horas_estimadas, req.body.horas_realizadas, atendimento);
        await ProjetoBO.alterarProjeto(projeto);

        res.status(200).json({
            status: req.body.status,
            message: 'projeto atualizado com sucesso'
        });

    }

    async excluirProjeto(req, res) {

        if (req.params.id) {
            let projeto = new Projeto();
            projeto.id = req.params.id;
            await ProjetoBO.excluirProjeto(projeto);
            res.status(200).json({
                status: req.body.status,
                message: 'projeto excluido com sucesso.'
            });

        }

    }

}

module.exports = ProjetoController;