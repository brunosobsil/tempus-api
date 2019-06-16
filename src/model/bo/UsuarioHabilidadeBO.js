const dao = require('../dao/UsuarioHabilidadeDAO');

class UsuarioHabilidadeBO {

    obterUsuarioHabilidade(usuarioHabilidade){
        if (usuarioHabilidade.usuario) {
            return dao.obterUsuarioHabilidade(usuarioHabilidade);
        } else {
            return {
                error: true,
                status_code: 404,
                status_message: 'Not Found',
                message: 'usuario não existe'
            }
        }
    }

    async incluirUsuarioHabilidade(usuarioHabilidade){
        const error = new Array();

        if (usuarioHabilidade.usuario) {
            if (usuarioHabilidade.usuario.id == null) {
                error.push('necessario informar o id do usuario');
            }
        } else {
            error.push('necessario informar um usuario válido');
        }

        if (usuarioHabilidade.habilidade) {
            if (usuarioHabilidade.habilidade.id == null) {
                error.push('necessario informar o id da habilidade');
            }
        } else {
            error.push('necessario informar uma habilidade válida');
        }

        if (!error.length) {
            let usuHab = await dao.obterUsuarioHabilidade(usuarioHabilidade);
            if (usuHab.length > 0) {
                if (usuHab.some(item => item.id_habilidade === usuarioHabilidade.habilidade.id && item.usuario.id === usuarioHabilidade.usuario.id)) {
                    error.push('usuário já possui essa habilidade');
                }
            }
        }

        if (usuarioHabilidade.nivel < 1 || usuarioHabilidade.nivel > 5) {
            error.push('nivel deve estar entre 1 e 5');
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
                let usuHabi = await dao.incluirUsuarioHabilidade(usuarioHabilidade);

                return {
                    error: false,
                    status_code: 201,
                    status_message: 'Created',
                    message: 'associacao entre usuario e habilidade realizada com sucesso',
                    body: usuHabi
                }
            } catch (error) {
                return {
                    error: true,
                    status_code: 500,
                    status_message: 'Server Error',
                    message: 'erro ao inserir habilidade para o usuário' + JSON.stringify(error)
                };
            }
        }
    }

    async alterarUsuarioHabilidade(usuarioHabilidade){
        const error = new Array();

        if (usuarioHabilidade.usuario) {
            if (usuarioHabilidade.usuario.id == null) {
                error.push('necessario informar o id do usuario');
            }
        } else {
            error.push('necessario informar um usuario válido');
        }

        if (usuarioHabilidade.habilidade) {
            if (usuarioHabilidade.habilidade.id == null) {
                error.push('necessario informar o id da habilidade');
            }
        } else {
            error.push('necessario informar uma habilidade válida');
        }

        if (!error.length) {
            let usuHab = await dao.obterUsuarioHabilidade(usuarioHabilidade);

            if (usuHab.length > 0) {
                if (usuHab.some(item => item.id_habilidade === usuarioHabilidade.id_habilidade && item.usuario.id === usuarioHabilidade.id_usuario && item.id !== usuarioHabilidade.id)) {
                    error.push('usuário já possui essa habilidade');
                }
            }
        }

        if (usuarioHabilidade.nivel < 1 || usuarioHabilidade.nivel > 5) {
            error.push('nivel deve estar entre 1 e 5');
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
                await dao.alterarUsuarioHabilidade(usuarioHabilidade);

                return {
                    error: false,
                    status_code: 200,
                    status_message: 'OK',
                    message: 'associacao entre usuario e habilidade atualizada com sucesso'
                }
            } catch (error) {
                return {
                    error: true,
                    status_code: 500,
                    status_message: 'Server Error',
                    message: 'erro ao inserir habilidade para o usuário.' + JSON.stringify(error)
                };
            }
        }

    }

    async excluirUsuarioHabilidade(usuarioHabilidade){
        const error = new Array();

        if (usuarioHabilidade.usuario) {
            if (usuarioHabilidade.usuario.id == null) {
                error.push('necessario informar o id do usuario');
            }
        } else {
            error.push('necessario informar um usuario válido');
        }

        if (usuarioHabilidade.habilidade) {
            if (usuarioHabilidade.habilidade.id == null) {
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
            let usuHab = await dao.obterUsuarioHabilidade(usuarioHabilidade);

            if (usuHab.length > 0) {
                try {
                    await dao.excluirUsuarioHabilidade(usuarioHabilidade);
                    return {
                        error: false,
                        status_code: 200,
                        message: 'associacao entre usuario e habilidade excluida com sucesso'
                    }
                } catch (error) {
                    return {
                        error: true,
                        status_code: 500,
                        status_message: 'Server Error',
                        message: 'erro ao excluir a associacao entre usuario e habilidade'
                    };
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'associacao entre usuario e habilidade não existe'
                }
            }
        }

    }

    async excluirUsuarioHabilidades(usuarioHabilidade){
        const error = new Array();

        if (usuarioHabilidade.usuario) {
            if (usuarioHabilidade.usuario.id == null) {
                error.push('necessario informar o id do usuario');
            }
        } else {
            error.push('necessario informar um usuario válido');
        }

        if (error.length > 0) {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: error
            };
        } else {
            let usuHab = await dao.obterUsuarioHabilidade(usuarioHabilidade);

            if (usuHab.length > 0) {
                try {

                    await dao.excluirUsuarioHabilidades(usuarioHabilidade);
                    return {
                        error: false,
                        status_code: 200,
                        message: 'associacao entre usuario e habilidades excluida com sucesso'
                    }

                } catch (error) {
                    return {
                        error: true,
                        status_code: 500,
                        status_message: 'Server Error',
                        message: 'erro ao excluir a associacao entre usuario e habilidade'
                    };
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'usuario não possui habilidades'
                }
            }
        }
    }

}

module.exports = new UsuarioHabilidadeBO();