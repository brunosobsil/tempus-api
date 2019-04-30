const dao = require('../dao/AgendamentoDAO');

class AgendamentoBO {
    
    obterAgendamento(agendamento){
        return dao.obterAgendamento(agendamento);
    }

    obterAgendamentos(){
        return dao.obterAgendamentos();
    }
    
    incluirAgendamento(agendamento){
        dao.incluirAgendamento(agendamento);
    }

    alterarAgendamento(agendamento){
        dao.alterarAgendamento(agendamento);
    }

    excluirAgendamento(agendamento){
        dao.excluirAgendamento(agendamento);
    }

}

module.exports = new AgendamentoBO();