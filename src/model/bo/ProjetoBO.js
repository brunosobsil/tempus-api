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

    calcularHorasProjeto(projeto){
        dao.calcularHorasProjeto(projeto);
    }

    excluirProjeto(projeto){
        dao.excluirProjeto(projeto);
    }

    obterHorasPorProjetos(dt_ini, dt_fin){
        return dao.obterHorasPorProjetos(dt_ini, dt_fin);
    }

}

module.exports = new ProjetoBO();