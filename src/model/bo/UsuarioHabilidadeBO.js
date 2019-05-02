const dao = require('../dao/UsuarioHabilidadeDAO');

class UsuarioHabilidadeBO {

    obterUsuarioHabilidade(usuarioHabilidade){
        return dao.obterUsuarioHabilidade(usuarioHabilidade);
    }

    incluirUsuarioHabilidade(usuarioHabilidade){
        dao.incluirUsuarioHabilidade(usuarioHabilidade);
    }

    alterarUsuarioHabilidade(usuarioHabilidade){
        dao.alterarUsuarioHabilidade(usuarioHabilidade);
    }

    excluirUsuarioHabilidade(usuarioHabilidade){
        dao.excluirUsuarioHabilidade(usuarioHabilidade);
    }

    excluirUsuarioHabilidades(usuarioHabilidade){
        dao.excluirUsuarioHabilidades(usuarioHabilidade);
    }

}

module.exports = new UsuarioHabilidadeBO();