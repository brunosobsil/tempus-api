const Usuario = require('../model/entities/Usuario');
const UsuarioBO = require('../model/bo/UsuarioBO');

class UsuarioController {
    
    async obterUsuario(req, res){
        
        if(req.params.id){
           // Obter usuario por ID 
           let usuario = new Usuario();
           usuario.id = req.params.id;
           usuario = await UsuarioBO.obterUsuario(usuario);
           res.send(usuario);

        }else{
            // Obter todos os usuarios
            const usuarios = await UsuarioBO.obterUsuarios();
            res.send(usuarios);
        }
        
    }

    incluirUsuario(req, res){
        res.send('incluir usuario')
    }

    alterarUsuario(req, res){
        res.send('alterar usuario')
    }

    ativarDesativarUsuario(req, res){
        res.send('ativar/desativar usuario')
    }

}

module.exports = UsuarioController;