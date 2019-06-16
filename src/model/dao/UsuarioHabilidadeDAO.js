const { UsuarioHabilidade, Usuario, Habilidade } = require('../orm/models');

class UsuarioHabilidadeDAO {

    async obterUsuarioHabilidade(usuarioHabilidade) {
        const usuHabilidade = await UsuarioHabilidade.findAll({
            include: [{model: Habilidade, as: 'habilidade'},{model: Usuario, as: 'usuario'}],
            where: { id_usuario: usuarioHabilidade.usuario.id }
        });

        return usuHabilidade;
    }

    async obterUsuariosPorHabilidade(habilidade){
        const usuHabilidade = await UsuarioHabilidade.findAll({
            include: [{model: Habilidade, as: 'habilidade'},{model: Usuario, as: 'usuario'}],
            where: { id_habilidade: habilidade.id }
        });

        return usuHabilidade;
    }

    async incluirUsuarioHabilidade(usuarioHabilidade){
        let habUsu = await UsuarioHabilidade.create({
            nivel: usuarioHabilidade.nivel,
            id_usuario: usuarioHabilidade.usuario.id,
            id_habilidade: usuarioHabilidade.habilidade.id
        });

        return habUsu;
    }

    async alterarUsuarioHabilidade(usuarioHabilidade) {
        await UsuarioHabilidade.update({
            nivel: usuarioHabilidade.nivel
        },
        {
            where: {
                id_usuario: usuarioHabilidade.usuario.id,
                id_habilidade: usuarioHabilidade.habilidade.id
            }
        });
    }

    async excluirUsuarioHabilidade(usuarioHabilidade){
        await UsuarioHabilidade.destroy({
            where: {
                id_usuario: usuarioHabilidade.usuario.id,
                id_habilidade: usuarioHabilidade.habilidade.id
            }
        });
    }

    async excluirUsuarioHabilidades(usuarioHabilidade){
        await UsuarioHabilidade.destroy({
            where: {
                id_usuario: usuarioHabilidade.usuario.id
            }
        });
    }

}

module.exports = new UsuarioHabilidadeDAO();