const dao = require('../dao/AtendimentoDAO');

class AtendimentoBO {

    obterAtendimento(atendimento){
        return dao.obterAtendimento(atendimento);
    }

    obterAtendimentos(){
        return dao.obterAtendimentos();
    }
    
    incluirAtendimento(atendimento){
        return dao.incluirAtendimento(atendimento);
    }

    alterarAtendimento(atendimento){
        dao.alterarAtendimento(atendimento);
    }

    excluirAtendimento(atendimento){
        dao.excluirAtendimento(atendimento);
    }
}

module.exports = new AtendimentoBO();