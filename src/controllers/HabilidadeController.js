const Habilidade = require('../model/entities/Habilidade');
const HabilidadeBO = require('../model/bo/HabilidadeBO');

class HabilidadeController {

    async obterHabilidade(req, res) {

        if (req.params.id) {
            // Obter habilidade por ID 
            let habilidade = new Habilidade();
            habilidade.id = req.params.id;
            habilidade = await HabilidadeBO.obterHabilidade(habilidade);
            res.send(habilidade);

        } else {
            // Obter todas as habilidades
            let habilidades = await HabilidadeBO.obterHabilidades();
            res.send(habilidades);
        }

    }

    async incluirHabilidade(req, res) {
        let habilidade = new Habilidade(null, req.body.nome, req.body.descricao);
        habilidade = await HabilidadeBO.incluirHabilidade(habilidade);
        let result;

        if(habilidade.error) {
            result = { error: habilidade.message };
        } else {
            result = { id: habilidade.body, status: req.body.status, message: habilidade.message };
        }

        res.status(habilidade.status_code).json(result);

    }

    async alterarHabilidade(req, res) {

        let habilidade = new Habilidade(req.params.id, req.body.nome, req.body.descricao);
        habilidade = await HabilidadeBO.alterarHabilidade(habilidade);
        let result;

        if(habilidade.error) {
            result = { error: habilidade.message }
        } else {
            result = { status: req.body.status, message: habilidade.message }
        }

        res.status(habilidade.status_code).json(result);

    }

    async excluirHabilidade(req, res) {

        let habilidade = new Habilidade();
        let result;

        if (req.params.id) {
            habilidade.id = req.params.id;
        }

        habilidade = await HabilidadeBO.excluirHabilidade(habilidade);

        if(habilidade.error) {
            result = { error: habilidade.message }
        } else {
            result = { status: req.body.status, message: habilidade.message }
        }

        res.status(habilidade.status_code).json(result);

    }

}

module.exports = HabilidadeController;