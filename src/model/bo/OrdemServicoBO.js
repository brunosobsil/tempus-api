const dao = require('../dao/OrdemServicoDAO');

class OrdemServicoBO {

    obterOrdemServico(OrdemServico) {
        return dao.obterOrdemServico(OrdemServico);
    }

    obterOrdensServico() {
        return dao.obterOrdensServico();
    }

    obterOrdemServicoPorStatus(dt_ini, dt_fin, status) {
        return dao.obterOrdemServicoPorStatus(dt_ini, dt_fin, status);
    }

    incluirOrdemServico(OrdemServico) {
        return dao.incluirOrdemServico(OrdemServico);
    }

    alterarOrdemServico(OrdemServico){
        dao.alterarOrdemServico(OrdemServico);
    }

    excluirOrdemServico(OrdemServico){
        dao.excluirOrdemServico(OrdemServico);
    }

    cancelarOrdemServico(OrdemServico){
        dao.cancelarOrdemServico(OrdemServico);
    }

}

module.exports = new OrdemServicoBO();