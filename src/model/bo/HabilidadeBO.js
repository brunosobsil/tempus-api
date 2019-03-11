const dao = require('../dao/HabilidadeDAO');

class HabilidadeBO {

    obterHabilidade(habilidade) {
        return dao.obterHabilidade(habilidade);
    }

    obterHabilidades() {
        return dao.obterHabilidades();
    }

    incluirHabilidade(habilidade) {
        dao.incluirHabilidade(habilidade);
    }

    alterarHabilidade(habilidade) {
        dao.alterarHabilidade(habilidade);
    }

    excluirHabilidade(habilidade) {
        dao.excluirHabilidade(habilidade);
    }
}

module.exports = new HabilidadeBO();