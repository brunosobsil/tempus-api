const Usuario = require('../model/entities/Usuario');
const UsuarioBO = require('../model/bo/UsuarioBO');

const Habilidade = require('../model/entities/Habilidade');
const HabilidadeBO = require('../model/bo/HabilidadeBO');

const UsuarioHabilidade = require('../model/entities/UsuarioHabilidade');
const UsuarioHabilidadeBO = require('../model/bo/UsuarioHabilidadeBO');

class UsuarioHabilidadeController {

    async obterUsuarioHabilidade(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter por ID do usuario
        let usuHabilidade = new UsuarioHabilidade(null, usuario, null);
        usuHabilidade = await UsuarioHabilidadeBO.obterUsuarioHabilidade(usuHabilidade);
        res.send(usuHabilidade);

    }

    async incluirUsuarioHabilidade(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        if (req.body.habilidade) {
            habilidade.id = req.body.habilidade.id;
            habilidade = await HabilidadeBO.obterHabilidade(habilidade);
        }

        // Define Usuario habilidade
        let usuHabilidade = new UsuarioHabilidade(req.body.nivel, usuario, habilidade);
        usuHabilidade = await UsuarioHabilidadeBO.incluirUsuarioHabilidade(usuHabilidade);

        let result;

        if(usuHabilidade.error) {
            result = { error: usuHabilidade.message };
        } else {
            result = { id: usuHabilidade.body, status: req.body.status, message: usuHabilidade.message };
        }

        res.status(usuHabilidade.status_code).json(result);

    }

    async incluirUsuarioHabilidades(req, res) {
        
        let usuario = new Usuario();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        let habilidades = req.body.habilidades;

        for(let i = 0; i < habilidades.length; i++){

            let habilidade = new Habilidade();
            habilidade.id = habilidades[i].id;
            habilidade = await HabilidadeBO.obterHabilidade(habilidade);

            let usuHabilidade = new UsuarioHabilidade(habilidades[i].nivel, usuario, habilidade);
            let usuHabs = await UsuarioHabilidadeBO.incluirUsuarioHabilidade(usuHabilidade);

        }

        let result;

        if(usuHabilidade.error) {
            result = { error: usuHabilidade.message };
        } else {
            result = { status: req.body.status, message: usuHabilidade.message };
        }

        res.status(usuHabilidade.status_code).json(result);

    }

    async excluirUsuarioHabilidade(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        if (req.params.id_habilidade) {
            habilidade.id = req.params.id_habilidade;
            habilidade = await HabilidadeBO.obterHabilidade(habilidade);
        }

        let usuHabilidade = new UsuarioHabilidade(null, usuario, habilidade);
        usuHabilidade = await UsuarioHabilidadeBO.excluirUsuarioHabilidade(usuHabilidade);

        let result;

        if(usuHabilidade.error) {
            result = { error: usuHabilidade.message };
        } else {
            result = { status: req.body.status, message: usuHabilidade.message };
        }

        res.status(usuHabilidade.status_code).json(result);

    }

    async excluirUsuarioHabilidades(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        let usuHabilidade = new UsuarioHabilidade(null, usuario, null);
        usuHabilidade = await UsuarioHabilidadeBO.excluirUsuarioHabilidades(usuHabilidade);

        let result;

        if(usuHabilidade.error) {
            result = { error: usuHabilidade.message };
        } else {
            result = { status: req.body.status, message: usuHabilidade.message };
        }

        res.status(usuHabilidade.status_code).json(result);

    }

    async alterarUsuarioHabilidade(req, res) {

        // Obter usuario por ID
        let usuario = new UsuarioHabilidade();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        if (req.params.id_habilidade) {
            habilidade.id = req.params.id_habilidade;
            habilidade = await HabilidadeBO.obterHabilidade(habilidade);
        }

        let usuHabilidade = new UsuarioHabilidade(req.body.nivel, usuario, habilidade);
        usuHabilidade = await UsuarioHabilidadeBO.alterarUsuarioHabilidade(usuHabilidade);

        let result;

        if(usuHabilidade.error) {
            result = { error: usuHabilidade.message };
        } else {
            result = { status: req.body.status, message: usuHabilidade.message };
        }

        res.status(usuHabilidade.status_code).json(result);

    }

}

module.exports = UsuarioHabilidadeController;