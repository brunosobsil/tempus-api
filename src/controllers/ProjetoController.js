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
        atendimento.id = req.body.atendimento.id;
        atendimento = await AtendimentoBO.obterAtendimento(atendimento);

        // Define projeto por ID
        let projeto = new Projeto(null, req.body.nome, req.body.descricao_atividades, req.body.horas_estimadas, req.body.horas_realizadas, atendimento);
        projeto = await ProjetoBO.incluirProjeto(projeto);

        let result;

        if(projeto.error) {
            result = { error: projeto.message }
        } else {
            result = { id: projeto.body, status: req.body.status, message: projeto.message }
        }

        res.status(projeto.status_code).json(result);

    }

    async alterarProjeto(req, res) {

        // Obter atendimento por ID
        let atendimento = new Atendimento();
        atendimento.id = req.body.atendimento.id;
        atendimento = await AtendimentoBO.obterAtendimento(atendimento);

        // Define projeto por ID
        let projeto = new Projeto(req.params.id, req.body.nome, req.body.descricao_atividades, req.body.horas_estimadas, req.body.horas_realizadas, atendimento);
        projeto = await ProjetoBO.alterarProjeto(projeto);

        let result;

        if(projeto.error) {
            result = { error: projeto.message }
        } else {
            result = { status: req.body.status, message: projeto.message }
        }

        res.status(projeto.status_code).json(result);

    }

    async excluirProjeto(req, res) {
        let projeto = new Projeto();
        let result;

        if (req.params.id) {
            projeto.id = req.params.id;
        }

        projeto = await ProjetoBO.excluirProjeto(projeto);

        if(projeto.error) {
            result = { error: projeto.message }
        } else {
            result = { status: req.body.status, message: projeto.message }
        }

        res.status(projeto.status_code).json(result);

    }

}

module.exports = ProjetoController;