const dao = require('../dao/UsuarioDAO');
const config = require('../../../config.json');
const bcrypt  = require('bcrypt');

class UsuarioBO {
    
    obterUsuario(usuario){
        return dao.obterUsuario(usuario);
    }

    obterUsuarios(){
        return dao.obterUsuarios();
    }

    incluirUsuario(usuario){
        usuario.senha = bcrypt.hashSync(usuario.senha, config.password_salt);
        return dao.incluirUsuario(usuario);
    }

    alterarUsuario(usuario){
        usuario.senha = bcrypt.hashSync(usuario.senha, config.password_salt);
        dao.alterarUsuario(usuario);
    }

    ativarDesativarUsuario(usuario){
        usuario.status = !usuario.status;
        dao.ativarDesativarUsuario(usuario);
    }
}

module.exports = new UsuarioBO();