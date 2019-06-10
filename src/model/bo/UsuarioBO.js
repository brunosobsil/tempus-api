const dao = require('../dao/UsuarioDAO');
const config = require('../../../config.json');
const cpf = require('@fnando/cpf/dist/node');
const bcrypt  = require('bcrypt');

class UsuarioBO {

    obterUsuario(usuario){
        return dao.obterUsuario(usuario);
    }

    obterUsuarios(){
        return dao.obterUsuarios();
    }

    async incluirUsuario(usuario){
        const error = new Array();
        let usu;

        if(usuario.cliente != null && usuario.coordenador != null) {
            if(usuario.cliente.id != null && usuario.coordenador.id != null) {
                error.push('usuario não pode ser vinculado a empresa e ter coordenador');
            }
        }

        if(!cpf.isValid(usuario.cpf)) {
            error.push('CPF inválido');
        }

        usu = await dao.obterUsuariosPorCPF(usuario);

        if(usu.length > 0){
            error.push('CPF já cadastrado');
        }

        usu = await dao.obterUsuariosPorEmail(usuario);

        if(usu.length > 0){
            error.push('email já cadastrado');
        }

        if(usuario.cliente == null){
            error.push('o cliente informado não existe');
        }

        if(usuario.coordenador == null){
            error.push('o coordenador informado não existe');
        }

        if(error.length > 0){
            return {
                error: true,
                status_code: 409,
                status_message: 'Conflict',
                message: error
            };
        }else{
            usuario.senha = bcrypt.hashSync(usuario.senha, config.password_salt);
            return await dao.incluirUsuario(usuario);
        }
    }

    async alterarUsuario(usuario){
        const error = new Array();
        let usu;

        if(usuario.cliente != null && usuario.coordenador != null) {
            if(usuario.cliente.id != null && usuario.coordenador.id != null) {
                error.push('usuario não pode ser vinculado a empresa e ter coordenador');
            }
        }

        if(!cpf.isValid(usuario.cpf)) {
            error.push('CPF inválido');
        }

        usu = await dao.obterUsuariosPorCPF(usuario);

        if(usu.length > 0){
            if(usu.length > 1 || usu[0].id != usuario.id) {
                error.push('CPF já cadastrado');
            }
        }

        usu = await dao.obterUsuariosPorEmail(usuario);

        if(usu.length > 0){
            if(usu.length > 1 || usu[0].id != usuario.id) {
                error.push('email já cadastrado');
            }
        }

        usu = await dao.obterUsuario(usuario);

        if(usuario.senha != usu.senha) {
            usuario.senha = bcrypt.hashSync(usuario.senha, config.password_salt);
        }

        if(error.length > 0){
            return {
                status_code: 409,
                status_message: 'Conflict',
                message: error
            };
        }else{
            await dao.alterarUsuario(usuario);
            return 'usuario atualizado com sucesso';
        }
    }

    ativarDesativarUsuario(usuario){
        usuario.status = !usuario.status;
        dao.ativarDesativarUsuario(usuario);
        return 'status do usuario atualizado com sucesso';
    }

    async obterHorasPorUsuarios(dt_ini, dt_fin){
        return await dao.obterHorasPorUsuarios(dt_ini, dt_fin);
    }

}

module.exports = new UsuarioBO();