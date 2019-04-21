const Projeto = require('../model/entities/Projeto');
const ProjetoBO = require('../model/bo/ProjetoBO');

class ProjetoController {

    async obterProjeto(req, res) {

        if (req.params.id) {
            // Obter projeto por ID 
            let projeto = new Projeto();
            projeto.id = req.params.id;
            projeto = await ProjetoBO.obterProjeto(projeto);
            res.send(habilidade);

        } else {
            // Obter todos os projetos
            let projetos = await ProjetoBO.obterProjetos();
            res.send(projetos);
        }

    }
}

module.exports = ProjetoController;