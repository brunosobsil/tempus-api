const dao = require('../dao/UsuarioDAO');

class UsuarioBO {
    
    obterUsuario(usuario){
        return dao.obterUsuario(usuario);
    }

    obterUsuarios(){
        return dao.obterUsuarios();
    }

    incluirUsuario(usuario){
        return dao.incluirUsuario(usuario);
    }

    alterarUsuario(usuario){
        dao.alterarUsuario(usuario);
    }

    ativarDesativarUsuario(usuario){
        usuario.status = !usuario.status;
        dao.ativarDesativarUsuario(usuario);
    }
}

module.exports = new UsuarioBO();