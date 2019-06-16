const Usuario = require('../model/entities/Usuario');
const UsuarioBO = require('../model/bo/UsuarioBO');

const Cliente = require('../model/entities/Cliente');
const ClienteBO = require('../model/bo/ClienteBO');

class UsuarioController {

    async obterUsuario(req, res) {

        if (req.params.id) {
            // Obter usuario por ID 
            let usuario = new Usuario();
            usuario.id = req.params.id;
            usuario = await UsuarioBO.obterUsuario(usuario);
            res.send(usuario);

        } else {
            // Obter todos os usuarios
            let usuarios = await UsuarioBO.obterUsuarios();
            res.send(usuarios);
        }

    }

    async incluirUsuario(req, res) {
        let result;

        // Obter cliente por ID
        let cliente = new Cliente();

        if(req.body.cliente){
            cliente.id = req.body.cliente.id;
            cliente = await ClienteBO.obterCliente(cliente);
        }

        // Obter coordenador por ID
        let coordenador = new Usuario();

        if(req.body.coordenador){
            coordenador.id = req.body.coordenador.id;
            coordenador = await UsuarioBO.obterUsuario(coordenador);
        }

        let usuario = new Usuario( null, 
                                   req.body.nome, 
                                   req.body.endereco, 
                                   req.body.numero, 
                                   req.body.complemento, 
                                   req.body.bairro, 
                                   req.body.cidade, 
                                   req.body.uf, 
                                   req.body.cep,
                                   req.body.telefone, 
                                   req.body.email, 
                                   req.body.status, 
                                   req.body.cpf, 
                                   req.body.perfil, 
                                   req.body.senha,
                                   coordenador, 
                                   cliente);
        usuario = await UsuarioBO.incluirUsuario(usuario);

        if(usuario.error) {
            result = { error: usuario.message };
        } else {
            result = { id: usuario.body };
        }

        res.status(usuario.status_code).json(result);
    }

    async alterarUsuario(req, res) {
        let result;

        // Obter cliente por ID
        let cliente = new Cliente();

        if(req.body.cliente){
            cliente.id = req.body.cliente.id;
            cliente = await ClienteBO.obterCliente(cliente);
        }

        // Obter coordenador por ID
        let coordenador = new Usuario();

        if(req.body.coordenador){
            coordenador.id = req.body.coordenador.id;
            coordenador = await UsuarioBO.obterUsuario(coordenador);
        }

        let usuario = new Usuario(req.params.id,
                                  req.body.nome, 
                                  req.body.endereco, 
                                  req.body.numero, 
                                  req.body.complemento, 
                                  req.body.bairro, 
                                  req.body.cidade, 
                                  req.body.uf, 
                                  req.body.cep,
                                  req.body.telefone, 
                                  req.body.email, 
                                  req.body.status, 
                                  req.body.cpf, 
                                  req.body.perfil, 
                                  req.body.senha,
                                  coordenador, 
                                  cliente);
        usuario = await UsuarioBO.alterarUsuario(usuario);

        if(usuario.error) {
            result = { error: usuario.message };
        } else {
            result = { info: usuario };
        }

        res.status(usuario.status_code).json(result);
    }

    async alterarStatusUsuario(req, res) {

        let usuario = new Usuario();
        let result;

        if (req.params.id) {
            usuario.id = req.params.id;
        }

        let usu = await UsuarioBO.ativarDesativarUsuario(usuario);

        if(usu.error) {
            result = { error: usu.message }
        } else {
            result = { info: usu}
        }

        res.status(usu.status_code).json(result);

    }

}

module.exports = UsuarioController;