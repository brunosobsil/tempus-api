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

        let usuario = new Usuario(null, req.body.nome, req.body.endereco, req.body.telefone, req.body.email, req.body.senha, req.body.status, req.body.cpf, req.body.perfil, coordenador, cliente);
        let id_gerado = await UsuarioBO.incluirUsuario(usuario);

        if(! id_gerado){
            res.status(500).json({
                error: 'erro ao cadastrar usuario.'
            });
        }else{
            res.status(201).json({
                id: id_gerado
            });
        }

    }

    async alterarUsuario(req, res) {

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

        let usuario = new Usuario(req.params.id, req.body.nome, req.body.endereco, req.body.telefone, req.body.email, req.body.senha, req.body.status, req.body.cpf, req.body.perfil, coordenador, cliente);
        let user = await UsuarioBO.alterarUsuario(usuario);

        if(user.error){
            res.status(user.status_code).json({
                error: user.message
            });
        }else{
            res.status(200).json({
                info: user
            });
        }

    }

    async alterarStatusUsuario(req, res) {

        let usuario = new Usuario()
        usuario.id = req.params.id;
        usuario = await UsuarioBO.obterUsuario(usuario);
        let user = await UsuarioBO.ativarDesativarUsuario(usuario);

        if(user.error){
            res.status(user.status_code).json({
                error: user.message
            });
        }else{
            res.status(200).json({
                info: user
            });
        }

    }

}

module.exports = UsuarioController;