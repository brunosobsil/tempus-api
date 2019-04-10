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
        await HabilidadeBO.incluirHabilidade(habilidade);
        res.status(201).json({
            status: req.body.status,
            message: 'habilidade inserida com sucesso'
        });

    }

    async alterarHabilidade(req, res) {

        let habilidade = new Habilidade(req.params.id, req.body.nome, req.body.descricao);
        await HabilidadeBO.alterarHabilidade(habilidade);
        res.status(200).json({
            status: req.body.status,
            message: 'habilidade atualizada com sucesso'
        });

    }

    async excluirHabilidade(req, res) {

        if (req.params.id) {
            let habilidade = new Habilidade();
            habilidade.id = req.params.id;
            await HabilidadeBO.excluirHabilidade(habilidade);
            res.status(200).json({
                status: req.body.status,
                message: 'habilidade excluida com sucesso.'
            });
    
        }

    }

}

module.exports = HabilidadeController;