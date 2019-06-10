const dao = require('../dao/UsuarioDAO');
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcrypt');
const config = require('../../../config.json');

class AutenticacaoBO {
    
    async autenticarUsuario(usuario){

        if(usuario.email && usuario.senha){
            let user = await dao.obterUsuariosPorEmail(usuario);

            if (user.length > 0) {
                if (bcrypt.hashSync(usuario.senha, config.password_salt) === user[0].senha) {
                    var token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: user[0].id,
                    }, config.jwt_hash);

                    return {
                        status_code: 200,
                        status_message: 'OK',
                        message: 'autenticado',
                        token: token,
                    };

                } else {
                    return {
                        status_code: 401,
                        status_message: 'Unauthorized',
                        message: 'acesso não autorizado'
                    };
                }
            } else {
                return {
                    status_code: 404,
                    status_message: 'Not Found',
                    message: 'usuário não localizado'
                };
            }

        } else {
            return {
                status_code: 400,
                status_message: 'Bad Request',
                message: 'email e senha são obrigatórios'
            };
        }
    }

    async validarToken(req) {
        if(req.url === '/login'){
            return true;
        }else{

            let header = req.headers['authorization'];

            if(typeof header !== 'undefined') {

                let bearer = header.split(' ');
                let token = bearer[1];

                try {
                    let a = jwt.verify(token, config.jwt_hash);
                    return true;
                } catch(err) {
                    return {
                        status_code: 401,
                        status_message: 'Unauthorized',
                        message: 'acesso não autorizado'
                    };
                }

            } else {
                return {
                    status_code: 400,
                    status_message: 'Bad Request',
                    message: 'token obrigatório'
                };
            }
        }
    }

}

module.exports = new AutenticacaoBO();