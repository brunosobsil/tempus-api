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

    async incluirAgendamento(agendamento){
        const error = new Array();

        let agend = await dao.obterAgendamento(agendamento);
        
        /* let hoje = new Date().toUTCString();
        if (agendamento.data_hora_agendamento < hoje) {
            error.push('Não é possível agendar para datas passadas');
        } */

        if (agendamento.usuario) {
            if (agendamento.usuario.id == null) {
                error.push('necessario informar o id do usuario');
            }
        } else {
            error.push('necessario informar um usuario válido');
        }

        if (agendamento.atendimento) {
            if (agendamento.atendimento.id == null) {
                error.push('necessario informar o id do atendimento');
            }
        } else {
            error.push('necessario informar um atendimento válido');
        }

        if (error.length > 0) {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: error
            }
        } else {
            try {
                agend = await dao.incluirAgendamento(agendamento);

                return {
                    error: false,
                    status_code: 201,
                    status_message: 'Created',
                    message: 'agendamento inserido com sucesso',
                    body: agend
                }
            } catch (error) {
                return {
                    error: true,
                    status_code: 500,
                    status_message: 'Server Error',
                    message: 'erro ao inserir agendamento'
                };
            }
        }

    }

    async alterarAgendamento(agendamento){

        const error = new Array();

        if (agendamento.id) {
            let agend = await dao.obterAgendamento(agendamento);
            
            if (agend != null) {

                /*let hoje = new Date().toUTCString();
                if (agendamento.data_hora_agendamento < hoje) {
                    error.push('Não é possível agendar para datas passadas');
                } */
                if (agendamento.usuario) {
                    if (agendamento.usuario.id == null) {
                        error.push('necessario informar o id do usuario');
                    }
                } else {
                    error.push('necessario informar um usuario válido');
                }

                if (agendamento.atendimento) {
                    if (agendamento.atendimento.id == null) {
                        error.push('necessario informar o id do atendimento');
                    }
                } else {
                    error.push('necessario informar um atendimento válido');
                }

                if (error.length > 0) {
                    return {
                        error: true,
                        status_code: 409,
                        status_message: 'Conflict',
                        message: error
                    }
                } else {
                    try {
                        dao.alterarAgendamento(agendamento);

                        return {
                            error: false,
                            status_code: 200,
                            status_message: 'OK',
                            message: 'agendamento alterado com sucesso'
                        }
                    } catch (error) {
                        return {
                            error: true,
                            status_code: 500,
                            status_message: 'Server Error',
                            message: 'erro ao alterar agendamento'
                        };
                    }
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'agendamento não existe'
                }
            }
        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id do agendamento'
            };
        }

    }

    async excluirAgendamento(agendamento){
        if (agendamento.id) {
            let agend = await dao.obterAgendamento(agendamento);

            if (agend) {
                try {
                    await dao.excluirAgendamento(agendamento);

                    return {
                        error: false,
                        status_code: 200,
                        message: 'agendamento excluido com sucesso'
                    }
                } catch (error) {
                    return {
                        error: true,
                        status_code: 500,
                        status_message: 'Server Error',
                        message: 'erro ao excluir agendamento'
                    };
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'agendamento não existe'
                }
            }
        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id do agendamento'
            };
        }

    }

    verificarDisponibilidade(usuario, data_inicial, data_final){
        return dao.verificarDisponibilidade(usuario, data_inicial, data_final);
    }

}

module.exports = new AgendamentoBO();