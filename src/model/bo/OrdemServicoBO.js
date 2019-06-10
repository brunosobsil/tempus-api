const dao = require('../dao/OrdemServicoDAO');

class OrdemServicoBO {

    obterOrdemServico(OrdemServico) {
        return dao.obterOrdemServico(OrdemServico);
    }

    obterOrdensServico() {
        return dao.obterOrdensServico();
    }

    obterOrdemServicoPorStatus(dt_ini, dt_fin, status) {
        status = status.charAt(0).toUpperCase() + status.slice(1);
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

    alterarStatusOrdemServico(OrdemServico){
        OrdemServico.status = OrdemServico.status.charAt(0).toUpperCase() + OrdemServico.status.slice(1);
        dao.alterarStatusOrdemServico(OrdemServico);
    }

}

module.exports = new OrdemServicoBO();