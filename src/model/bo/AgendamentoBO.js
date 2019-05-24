const dao = require('../dao/AgendamentoDAO');

class AgendamentoBO {
    
    obterAgendamento(agendamento){
        return dao.obterAgendamento(agendamento);
    }

    obterAgendamentosPorPeriodo(data_inicial, data_final){
        return dao.obterAgendamentosPorPeriodo(data_inicial, data_final);
    }

    obterAgendamentos(){
        return dao.obterAgendamentos();
    }

    incluirAgendamento(agendamento){
        return dao.incluirAgendamento(agendamento);
    }

    alterarAgendamento(agendamento){
        dao.alterarAgendamento(agendamento);
    }

    excluirAgendamento(agendamento){
        dao.excluirAgendamento(agendamento);
    }

    verificarDisponibilidade(usuario, data_inicial, data_final){
        return dao.verificarDisponibilidade(usuario, data_inicial, data_final);
    }

}

module.exports = new AgendamentoBO();