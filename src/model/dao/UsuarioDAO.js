const { Usuario } = require('../orm/models');

class UsuarioDAO {

    async obterUsuario(usuario) {
        const user = await Usuario.findById(usuario.id);
        return user;
    }

    async obterUsuarios() {
        const users = await Usuario.findAll();
        return users;
    }

    async incluirUsuario(usuario) {
        let newUser = await Usuario.create({
              nome: usuario.nome,
              endereco: usuario.endereco,
              email: usuario.email,
              status: usuario.status,
              cpf: usuario.cpf,
              perfil: usuario.perfil
        });

        return newUser.id;
    }

    async alterarUsuario(usuario) {
        await Usuario.update({
            nome: usuario.nome,
            endereco: usuario.endereco,
            email: usuario.email,
            status: usuario.status,
            cpf: usuario.cpf,
            perfil: usuario.perfil
        }, {
            where: { id: usuario.id }
        });
    }

    async ativarDesativarUsuario(usuario) {
        let user = await this.obterUsuario(usuario);
        user.status = usuario.status;
        await user.save();
    }

}

module.exports = new UsuarioDAO();