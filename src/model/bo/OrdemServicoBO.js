const dao = require('../dao/OrdemServicoDAO');

class OrdemServicoBO {

    obterOrdemServico(OrdemServico) {
        return dao.obterOrdemServico(OrdemServico);
    }

    obterOrdensServico() {
        return dao.obterOrdensServico();
    }

    incluirOrdemServico(OrdemServico) {
        dao.incluirOrdemServico(OrdemServico);
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