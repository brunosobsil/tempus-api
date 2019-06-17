const dao = require('../dao/AtendimentoDAO');
const daoAgendamento = require('../dao/AgendamentoDAO');

class AtendimentoBO {

    obterAtendimento(atendimento){
        return dao.obterAtendimento(atendimento);
    }

    obterAtendimentos(){
        return dao.obterAtendimentos();
    }

    async incluirAtendimento(atendimento){
        const error = new Array();

        if (atendimento.usuario) {
            if (atendimento.usuario.id == null) {
                error.push('necessario informar o id do usuario');
            }
        } else {
            error.push('necessario informar um usuario válido');
        }

        if (atendimento.habilidade) {
            if (atendimento.habilidade.id == null) {
                error.push('necessario informar o id da habilidade');
            }
        } else {
            error.push('necessario informar uma habilidade válida');
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

                await dao.incluirAtendimento(atendimento);

                return {
                    error: false,
                    status_code: 201,
                    message: 'atendimento inserido com sucesso'
                }
            } catch (error) {
                return {
                    error: true,
                    status_code: 500,
                    status_message: 'Server Error',
                    message: 'erro ao excluir atendimento'
                };
            }
        }

    }

    async alterarAtendimento(atendimento){
        const error = new Array();
        if (atendimento.id) {
            let atend = await dao.obterAtendimento(atendimento);

            if (atend != null) {

                if (atendimento.usuario) {
                    if (atendimento.usuario.id == null) {
                        error.push('necessario informar o id do usuario');
                    }
                } else {
                    error.push('necessario informar um usuario válido');
                }

                if (atendimento.habilidade) {
                    if (atendimento.habilidade.id == null) {
                        error.push('necessario informar o id da habilidade');
                    }
                } else {
                    error.push('necessario informar uma habilidade válida');
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
                        await dao.alterarAtendimento(atendimento);

                        return {
                            error: false,
                            status_code: 200,
                            message: 'atendimento atualizado com sucesso'
                        }
                    } catch (error) {
                        return {
                            error: true,
                            status_code: 500,
                            status_message: 'Server Error',
                            message: 'erro ao atualizar atendimento'
                        };
                    }

                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'atendimento não existe'
                }
            }
        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id do atendimento'
            };
        }

    }

    async excluirAtendimento(atendimento){
        if (atendimento.id) {
            let atend = await dao.obterAtendimento(atendimento);

            if (atend) {

                let agen = await daoAgendamento.obterAgendamentosPorAtendimento(atend)

                if(agen.length > 0){
                    return {
                        error: true,
                        status_code: 409,
                        status_message: 'Integrity Failure',
                        message: 'Este atendimento está associado a um agendamento e não poderá ser excluído.'
                    };
                }

                try {
                    dao.excluirAtendimento(atendimento);

                    return {
                        error: false,
                        status_code: 200,
                        message: 'cliente excluido com sucesso'
                    }
                } catch (error) {
                    return {
                        error: true,
                        status_code: 500,
                        status_message: 'Server Error',
                        message: 'erro ao excluir atendimento'
                    };
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'atendimento não existe'
                }
            }

        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id do atendimento'
            };
        }
    }

}

module.exports = new AtendimentoBO();