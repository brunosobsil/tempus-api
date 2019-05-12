const Atendimento = require('../model/entities/Atendimento');
const AtendimentoBO = require('../model/bo/AtendimentoBO');

const Usuario = require('../model/entities/Usuario');
const UsuarioBO = require('../model/bo/UsuarioBO');

const Habilidade = require('../model/entities/Habilidade');
const HabilidadeBO = require('../model/bo/HabilidadeBO');

class AtendimentoController {

    async obterAtendimento(req, res) {

        if (req.params.id) {
            // Obter atendimento por ID
            let atendimento = new Atendimento();
            atendimento.id = req.params.id;
            atendimento = await AtendimentoBO.obterAtendimento(atendimento);
            res.send(atendimento);

        } else {
            // Obter todos as atendimentos
            let atendimentos = await AtendimentoBO.obterAtendimentos();
            res.send(atendimentos);
        }

    }

    async incluirAtendimento(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.body.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        habilidade.id = req.body.id_habilidade;
        habilidade = await HabilidadeBO.obterHabilidade(habilidade);

        // Define Atendimento
        let atendimento = new Atendimento(null, req.body.assunto, req.body.descricao, req.body.data_sugerida, null, habilidade, usuario);
        let id = await AtendimentoBO.incluirAtendimento(atendimento);

        res.status(201).json({
            status: req.body.status,
            message: 'atendimento inserido com sucesso',
            id: id
        });

    }

    async alterarAtendimento(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.body.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        habilidade.id = req.body.id_habilidade;
        habilidade = await HabilidadeBO.obterHabilidade(habilidade);

        let atendimento = new Atendimento(req.params.id, req.body.assunto, req.body.descricao, req.body.data_sugerida, null, habilidade, usuario);
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