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
        usuario.id = req.body.usuario.id
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        habilidade.id = req.body.habilidade.id;
        habilidade = await HabilidadeBO.obterHabilidade(habilidade);

        // Define Atendimento
        let atendimento = new Atendimento(null, req.body.assunto, req.body.descricao, req.body.data_sugerida, null, habilidade, usuario);
        atendimento = await AtendimentoBO.incluirAtendimento(atendimento);

        let result;
        if(atendimento.error) {
            result = { error: atendimento.message };
        } else {
            result = { id: atendimento.body, status: req.body.status, message: atendimento.message };
        }

        res.status(atendimento.status_code).json(result);
    }

    async alterarAtendimento(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.body.usuario.id;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        habilidade.id = req.body.habilidade.id;
        habilidade = await HabilidadeBO.obterHabilidade(habilidade);

        let atendimento = new Atendimento(req.params.id, req.body.assunto, req.body.descricao, req.body.data_sugerida, null, habilidade, usuario);
        atendimento = await AtendimentoBO.alterarAtendimento(atendimento);

        let result;
        if(atendimento.error) {
            result = { error: atendimento.message };
        } else {
            result = { id: atendimento.body, status: req.body.status, message: atendimento.message };
        }

        res.status(atendimento.status_code).json(result);

    }

    async excluirAtendimento(req, res) {
        let atendimento = new Atendimento();

        if (req.params.id) {
            atendimento.id = req.params.id;
        }
        atendimento = await AtendimentoBO.excluirAtendimento(atendimento);

        let result;
        if(atendimento.error) {
            result = { error: atendimento.message };
        } else {
            result = { status: req.body.status, message: atendimento.message };
        }

        res.status(atendimento.status_code).json(result);
    }

}

module.exports = AtendimentoController;