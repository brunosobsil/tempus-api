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

    async obterUsuariosPorEmail(usuario) {
        const user = await Usuario.findAll({
            where: { email: usuario.email },
            include: [{model: Cliente, as: 'cliente'}]
        });
        return user;
    }

    async obterUsuariosPorCPF(usuario) {
        const user = await Usuario.findAll({
            where: { cpf: usuario.cpf },
            include: [{model: Cliente, as: 'cliente'}]
        });
        return user;
    }

    async obterHorasPorUsuarios(dt_ini, dt_fin){
        const sqlQuery =  ' SELECT u.id, u.nome, EXTRACT(epoch FROM (SUM(os.data_hora_final - os.data_hora_inicio)) / 3600) as total' +
                        ' FROM "OrdemServicos" os' +
                        ' INNER JOIN "Agendamentos" a ON a.id = os.id_agendamento' +
                        ' INNER JOIN "Usuarios" u ON u.id = a.id_usuario' +
                        ' WHERE os.data_hora_inicio >= :dt1' +
                        ' AND os.data_hora_final <= :dt2' +
                        ' GROUP BY u.id, u.nome';

        const result = await Usuario.sequelize.query(
            sqlQuery, {
            replacements: {dt1: dt_ini, dt2: dt_fin},
            type: Usuario.sequelize.QueryTypes.SELECT,
        });

        return result;
    }

    async incluirUsuario(usuario) {
        let newUser = await Usuario.create({
              nome: usuario.nome,
              endereco: usuario.endereco,
              numero: usuario.numero,
              complemento: usuario.complemento,
              bairro: usuario.bairro,
              cidade: usuario.cidade,
              uf: usuario.uf, 
              cep: usuario.cep,
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
            numero: usuario.numero,
            complemento: usuario.complemento,
            bairro: usuario.bairro,
            cidade: usuario.cidade,
            uf: usuario.uf, 
            cep: usuario.cep,
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