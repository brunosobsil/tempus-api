const { Cliente, Usuario } = require('../orm/models');

class UsuarioDAO {

    async obterUsuario(usuario) {
        const user = await Usuario.findByPk(usuario.id, {
            include: [{model: Cliente, as: 'cliente'}]
        });
        return user;
    }

    async obterUsuarios() {
        const users = await Usuario.findAll({
            include: [{model: Cliente, as: 'cliente'}]
        });
        return users;
    }

    async obterUsuarioPorEmail(usuario) {
        const user = await Usuario.findOne({
            where: { email: usuario.email },
            include: [{model: Cliente, as: 'cliente'}]
        });
        return user;
    }

    async incluirUsuario(usuario) {
        let newUser = await Usuario.create({
              nome: usuario.nome,
              endereco: usuario.endereco,
              telefone: usuario.telefone,
              email: usuario.email,
              senha: usuario.senha,
              status: usuario.status,
              cpf: usuario.cpf,
              perfil: usuario.perfil,
              id_cliente: usuario.cliente.id,
              id_coordenador: usuario.coordenador.id
        });

        return newUser.id;
    }

    async alterarUsuario(usuario) {
        await Usuario.update({
            nome: usuario.nome,
            endereco: usuario.endereco,
            telefone: usuario.telefone,
            email: usuario.email,
            senha: usuario.senha,
            status: usuario.status,
            cpf: usuario.cpf,
            perfil: usuario.perfil,
            id_cliente: usuario.cliente.id,
            id_coordenador: usuario.coordenador.id
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