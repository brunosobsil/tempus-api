const dao = require('../dao/HabilidadeDAO');

class HabilidadeBO {

    obterHabilidade(habilidade) {
        return dao.obterHabilidade(habilidade);
    }

    obterHabilidades() {
        return dao.obterHabilidades();
    }

    incluirHabilidade(habilidade) {
        return dao.incluirHabilidade(habilidade);
    }

    alterarHabilidade(habilidade) {
        dao.alterarHabilidade(habilidade);
    }

    async excluirHabilidade(habilidade) {
        await dao.excluirHabilidade(habilidade);
    }

}

module.exports = new HabilidadeBO();