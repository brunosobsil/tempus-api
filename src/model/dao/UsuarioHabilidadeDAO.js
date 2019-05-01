const { UsuarioHabilidade } = require('../orm/models');

class UsuarioHabilidadeDAO {

    async obterUsuarioHabilidade(usuarioHabilidade) {
        const usuHabilidade = await UsuarioHabilidade.find({
            where: { id_usuario: usuarioHabilidade.usuario.id }
        });

        return usuHabilidade;
    }

    async incluirUsuarioHabilidade(usuarioHabilidade){
        let habUsu = await UsuarioHabilidade.create({
            nivel: usuarioHabilidade.nivel,
            id_usuario: usuarioHabilidade.usuario.id,
            id_habilidade: usuarioHabilidade.habilidade.id
        });

        return habUsu.id;
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

}

module.exports = new UsuarioHabilidadeDAO();