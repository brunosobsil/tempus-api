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
        habilidade.id = req.body.id_habilidade;
        habilidade = await HabilidadeBO.obterHabilidade(habilidade);

        let usuHabilidade = new UsuarioHabilidade(req.body.nivel, usuario, habilidade);
        await UsuarioHabilidadeBO.incluirUsuarioHabilidade(usuHabilidade);
        res.status(201).json({
            status: req.body.status,
            message: 'associacao entre usuario e habilidade realizada com sucesso'
        });

    }

    async excluirUsuarioHabilidade(req, res) {

        // Obter usuario por ID
        let usuario = new Usuario();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        habilidade.id = req.params.id_habilidade;
        habilidade = await HabilidadeBO.obterHabilidade(habilidade);

        let usuHabilidade = new UsuarioHabilidade(null, usuario, habilidade);

        await UsuarioHabilidadeBO.excluirUsuarioHabilidade(usuHabilidade);

        res.status(201).json({
            status: req.body.status,
            message: 'associacao entre usuario e habilidade excluida com sucesso'
        });

    }

    async alterarUsuarioHabilidade(req, res) {

        // Obter usuario por ID
        let usuario = new UsuarioHabilidade();
        usuario.id = req.params.id_usuario;
        usuario = await UsuarioBO.obterUsuario(usuario);

        // Obter habilidade por ID
        let habilidade = new Habilidade();
        habilidade.id = req.params.id_habilidade;
        habilidade = await HabilidadeBO.obterHabilidade(habilidade);

        let usuHabilidade = new UsuarioHabilidade(req.body.nivel, usuario, habilidade);

        await UsuarioHabilidadeBO.alterarUsuarioHabilidade(usuHabilidade);

        res.status(200).json({
            status: req.body.status,
            message: 'associacao entre usuario e habilidade atualizada com sucesso'
        });

    }

}

module.exports = UsuarioHabilidadeController;