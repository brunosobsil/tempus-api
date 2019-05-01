const Projeto = require('../model/entities/Projeto');
const ProjetoBO = require('../model/bo/ProjetoBO');

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

        let projeto = new Projeto(req.body.nome, req.body.descricao_atividades, req.body.horas_estimadas, req.body.horas_realizadas);
        let id = await ProjetoBO.incluirProjeto(projeto);
        
        res.status(201).json({
            status: req.body.status,
            message: 'projeto inserido com sucesso',
            id: id
        });

    }

    async alterarProjeto(req, res) {

        let projeto = new Projeto(req.body.nome, req.body.descricao_atividades, req.body.horas_estimadas, req.body.horas_realizadas);
        await ProjetoBO.alterarProjeto(projeto);

        res.status(200).json({
            status: req.body.status,
            message: 'projeto atualizado com sucesso'
        });

    }

    async excluirProjeto(req, res) {

        if (req.params.id) {
            let projeto = new Habilidade();
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