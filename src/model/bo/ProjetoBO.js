const dao = require('../dao/ProjetoDAO');

class ProjetoBO {

    obterProjeto(projeto) {
        return dao.obterProjeto(projeto);
    }

    obterProjetos() {
        return dao.obterProjetos();
    }

    async incluirProjeto(projeto) {

        const error = new Array();

        if (projeto.atendimento) {
            if (projeto.atendimento.id == null) {
                error.push('necessario informar o id do atendimento');
            }
        } else {
            error.push('necessario informar um atendimento valido');
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
                let proj = await dao.incluirProjeto(projeto);

                return {
                    error: false,
                    status_code: 201,
                    status_message: 'Created',
                    message: 'projeto incluido com sucesso',
                    body: proj
                }

            } catch (error) {
                return {
                    error: true,
                    status_code: 500,
                    status_message: 'Server Error',
                    message: 'erro ao incluir projeto'
                };
            }
        }

    }

    async alterarProjeto(projeto){
        const error = new Array();

        if (projeto.id) {
            let proj = await dao.obterProjeto(projeto);

            if (proj != null) {

                if (projeto.atendimento) {
                    if (projeto.atendimento.id == null) {
                        error.push('necessario informar o id do atendimento');
                    }
                } else {
                    error.push('necessario informar um atendimento valido');
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
                        await dao.alterarProjeto(projeto);

                        return {
                            error: false,
                            status_code: 200,
                            message: 'projeto alterado com sucesso'
                        }
                    } catch (error) {
                        return {
                            error: true,
                            status_code: 500,
                            status_message: 'Server Error',
                            message: 'erro ao alterar projeto'
                        };
                    }
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'projeto não existe'
                }
            }
        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id do projeto'
            };
        }
    }

    async excluirProjeto(projeto){
        if (projeto.id) {
            let proj = await dao.obterProjeto(projeto);

            if (proj) {
                try {
                    dao.excluirProjeto(projeto);

                    return {
                        error: false,
                        status_code: 200,
                        message: 'projeto excluido com sucesso'
                    }
                } catch (error) {
                    return {
                        error: true,
                        status_code: 500,
                        status_message: 'Server Error',
                        message: 'erro ao excluir projeto'
                    };
                }

            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'projeto não existe'
                }
            }
        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id do projeto'
            };
        }
    }

    obterHorasPorProjetos(dt_ini, dt_fin){
        return dao.obterHorasPorProjetos(dt_ini, dt_fin);
    }

    calcularHorasProjeto(projeto){
        dao.calcularHorasProjeto(projeto);
    }

}

module.exports = new ProjetoBO();