const dao = require('../dao/UsuarioDAO');
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcrypt');

const config = require('../../../config.json');

class AutenticacaoBO {
    
    async autenticarUsuario(usuario){
        
        if(usuario.email && usuario.senha){
            let user = await dao.obterUsuarioPorEmail(usuario);

            if (user) {
    
                if (bcrypt.hashSync(usuario.senha, config.password_salt) === user.senha) {
                    // Expiração prevista para 1h
                    var token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: user.id,
                    }, config.jwt_hash);

                    return {token: token,  msg: 'autenticado'};
                } else {
                    return "acesso não autorizado";
                }

            } else {
                return "usuario não localizado";
            }

        } else {
            return "email e senha são obrigatorios";
        }
    }

}

module.exports = new AutenticacaoBO();