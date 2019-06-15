const dao = require('../dao/HabilidadeDAO');

class HabilidadeBO {

    obterHabilidade(habilidade) {
        return dao.obterHabilidade(habilidade);
    }

    obterHabilidades() {
        return dao.obterHabilidades();
    }

    async incluirHabilidade(habilidade) {

        let hab = await dao.obterHabilidades();

        if(hab.length > 0){
            if(hab.some(item => item.nome === habilidade.nome)){
                return {
                    error: true,
                    status_code: 409,
                    status_message: 'Conflict',
                    message: 'ja existe uma habilidade com esse nome'
                };
            }
        }

        try {
            hab = await dao.incluirHabilidade(habilidade);

            return {
                error: false,
                status_code: 201,
                status_message: 'Created',
                message: 'habilidade inserida com sucesso',
                body: hab
            }
        } catch (error) {
            return {
                error: true,
                status_code: 500,
                status_message: 'Server Error',
                message: 'erro ao inserir a habilidade'
            };
        }

    }

    async alterarHabilidade(habilidade) {

        if (habilidade.id) {

            let hab = await dao.obterHabilidade(habilidade);

            if (hab != null) {
                hab = await dao.obterHabilidades();

                if(hab.length > 0){
                    if(hab.some(item => item.nome == habilidade.nome && item.id != habilidade.id)){
                        return {
                            error: true,
                            status_code: 409,
                            status_message: 'Conflict',
                            message: 'já existe uma habilidade com esse nome'
                        }
                    }
                }

                try {
                    await dao.alterarHabilidade(habilidade);

                    return {
                        error: false,
                        status_code: 200,
                        status_message: 'OK',
                        message: 'habilidade atualizada com sucesso'
                    }
                } catch (error) {
                    return {
                        error: true,
                        status_code: 500,
                        status_message: 'Server Error',
                        message: 'erro ao alterar a habilidade'
                    };
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'habilidade não existe'
                }
            }

        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id da habilidade'
            };
        }

    }

    async excluirHabilidade(habilidade) {

        if (habilidade.id) {
            let hab = await dao.obterHabilidade(habilidade);

            if (hab) {
                try {
                    await dao.excluirHabilidade(habilidade);

                    return {
                        error: false,
                        status_code: 200,
                        message: 'habilidade excluida com sucesso'
                    }

                } catch (error) {
                    return {
                        error: true,
                        status_code: 500,
                        status_message: 'Server Error',
                        message: 'erro ao excluir a habilidade'
                    };
                }
            } else {
                return {
                    error: true,
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'habilidade não existe'
                }
            }
        } else {
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: 'necessario informar o id da habilidade'
            };
        }

    }

}

module.exports = new HabilidadeBO();