const AutenticacaoBO = require('../model/bo/AutenticacaoBO');
const Usuario = require('../model/entities/Usuario');
const UsuarioBO = require('../model/bo/UsuarioBO');

class AutenticacaoController {
    async autenticarUsuario(req, res) {

        let usuario = new Usuario();
        usuario.senha = req.body.senha;
        usuario.email = req.body.email;

        let auth = await AutenticacaoBO.autenticarUsuario(usuario);

        if(auth){
            res.status(200).json({
                auth,
                status: req.body.status,
            })
        }else{
            res.status(404).json({
                status: req.body.status,
                message: 'falha na autenticacao'
            })
        }

    }

}

module.exports = AutenticacaoController;