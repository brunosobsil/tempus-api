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

    async incluirOrdemServico(OrdemServico) {
        
        const error = new Array();

        if (OrdemServico.agendamento) {
            if (OrdemServico.agendamento.id == null) {
                error.push('necessario informar o id do agendamento');
            }
        } else {
            error.push('necessario informar o agendamento');
        }

        if(! OrdemServico.dataHoraInicio){
            error.push('necessario informar o data/hora inicio da os');
        }

        if(! OrdemServico.dataHoraFinal){
            error.push('necessario informar o data/hora final da os');
        }

        if(OrdemServico.dataHoraInicio && OrdemServico.dataHoraFinal){
            if(OrdemServico.dataHoraInicio > OrdemServico.dataHoraFinal){
                error.push('Horario de inicio da OS nao pode ser maior que o horario final');
            }
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

                await dao.incluirOrdemServico(OrdemServico);

                return {
                    error: false,
                    status_code: 201,
                    message: 'Ordem de Serviço incluída com sucesso'
                }
            } catch (error) {
                return {
                    error: true,
                    status_code: 500,
                    status_message: 'Server Error',
                    message: 'Erro ao incluir atendimento'
                };
            }
        }
        //return dao.incluirOrdemServico(OrdemServico);
    }

    async alterarOrdemServico(OrdemServico){
        const error = new Array();
        if (OrdemServico.id) {
            let os = await dao.obterOrdemServico(OrdemServico);

            if (os != null) {

                if (os.agendamento) {
                    if (os.agendamento.id == null) {
                        error.push('necessario informar o id do agendamento');
                    }
                } else {
                    error.push('necessario informar o agendamento');
                }

                if(! OrdemServico.dataHoraInicio){
                    error.push('necessario informar o data/hora inicio da os');
                }
        
                if(! OrdemServico.dataHoraFinal){
                    error.push('necessario informar o data/hora final da os');
                }
        
                if(OrdemServico.dataHoraInicio && OrdemServico.dataHoraFinal){
                    if(OrdemServico.dataHoraInicio > OrdemServico.dataHoraFinal){
                        error.push('Horario de inicio da OS nao pode ser maior que o horario final');
                    }
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
                        await dao.alterarOrdemServico(OrdemServico);

                        return {
                            error: false,
                            status_code: 200,
                            message: 'Os atualizada com sucesso'
                        }
                    } catch (error) {
                        return {
                            error: true,
                            status_code: 500,
                            status_message: 'Server Error',
                            message: 'Erro ao atualizar os'
                        };
                    }

                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'Os não existe'
                }
            }
        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'Necessario informar o id da OS'
            };
        }
        //dao.alterarOrdemServico(OrdemServico);
    }

    async excluirOrdemServico(OrdemServico){
        if (OrdemServico.id) {
            let os = await dao.obterOrdemServico(OrdemServico);

            if (os) {

                try {
                    await dao.excluirOrdemServico(OrdemServico);

                    return {
                        error: false,
                        status_code: 200,
                        message: 'OS excluida com sucesso'
                    }
                } catch (error) {
                    return {
                        error: true,
                        status_code: 500,
                        status_message: 'Server Error',
                        message: 'erro ao excluir a OS'
                    };
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'OS não existe'
                }
            }

        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id da OS'
            };
        }
        //dao.excluirOrdemServico(OrdemServico);
    }

    alterarStatusOrdemServico(OrdemServico){
        OrdemServico.status = OrdemServico.status.charAt(0).toUpperCase() + OrdemServico.status.slice(1);
        dao.alterarStatusOrdemServico(OrdemServico);
    }

}

module.exports = new OrdemServicoBO();