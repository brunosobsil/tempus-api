const Atendimento = require('../model/entities/Atendimento');
const AtendimentoBO = require('../model/bo/AtendimentoBO');

class AtendimentoController {

    async obterAtendimento(req, res) {

        if (req.params.id) {
            // Obter atendimento por ID 
            let atendimento = new Atendimento();
            atendimento.id = req.params.id;
            atendimento = await AtendimentoBO.obterAtendimento(atendimento);
            res.send(atendimento);

        } else {
            // Obter todas as atendimentos
            let atendimentos = await AtendimentoBO.obterAtendimentos();
            res.send(atendimentos);
        }

    }

    async incluirAtendimento(req, res) {

        let atendimento = new Atendimento(null, req.body.assunto, req.body.descricao, req.body.dataSugerida);
        let id = await AtendimentoBO.incluirAtendimento(atendimento);

        res.status(201).json({
            status: req.body.status,
            message: 'atendimento inserido com sucesso',
            id: id
        });

    }

    async alterarAtendimento(req, res) {

        let atendimento = new Atendimento(req.params.id, req.body.assunto, req.body.descricao, req.body.dataSugerida);
        await AtendimentoBO.alterarAtendimento(atendimento);

        res.status(200).json({
            status: req.body.status,
            message: 'atendimento atualizado com sucesso'
        });

    }

    async excluirAtendimento(req, res) {

        if (req.params.id) {
            let atendimento = new Atendimento();
            atendimento.id = req.params.id;
            await AtendimentoBO.excluirAtendimento(atendimento);
            res.status(200).json({
                status: req.body.status,
                message: 'atendimento excluido com sucesso.'
            });
        }

    }

}

module.exports = AtendimentoController;