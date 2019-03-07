const { Usuario } = require('../orm/models');

class UsuarioDAO {

    constructor(){
        Usuario.sync();
    }

    async obterUsuario(usuario){
        const user = await Usuario.findById(usuario.id);
        return user;
    }

    async obterUsuarios(){
        const users = await Usuario.findAll();
        return users; 
    }

    async incluirUsuario(usuario){
        await Usuario.create(usuario);
    }

    async alterarUsuario(usuario){
        let user = this.obterUsuario(usuario);
        await user.update(usuario);
    }

    async ativarDesativarUsuario(usuario){
        let user = this.obterUsuario(usuario);
        user.status = usuario.status;
        await user.save();
    }
}

module.exports = new UsuarioDAO();