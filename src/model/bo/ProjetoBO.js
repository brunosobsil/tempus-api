const dao = require('../dao/ProjetoDAO');

class ProjetoBO {

    obterProjeto(projeto) {
        return dao.obterProjeto(projeto);
    }

    obterProjetos() {
        return dao.obterProjetos();
    }

    incluirProjeto(projeto) {
        return dao.incluirProjeto(projeto);
    }

    alterarProjeto(projeto){
        dao.alterarProjeto(projeto);
    }

    excluirProjeto(projeto){
        dao.excluirProjeto(projeto);
    }
}

module.exports = new ProjetoBO();