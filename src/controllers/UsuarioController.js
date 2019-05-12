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
        cliente.id = req.body.id_cliente;
        cliente = await ClienteBO.obterCliente(cliente);

        let usuario = new Usuario(null, req.body.nome, req.body.endereco, req.body.email, req.body.status, req.body.cpf, req.body.perfil, cliente);
        let id = await UsuarioBO.incluirUsuario(usuario);

        res.status(201).json({
            status: req.body.status,
            message: 'usuario inserido com sucesso',
            id: id
        });

    }

    async alterarUsuario(req, res) {

        // Obter cliente por ID
        let cliente = new Cliente();
        cliente.id = req.body.id_cliente;
        cliente = await ClienteBO.obterCliente(cliente);

        let usuario = new Usuario(req.params.id, req.body.nome, req.body.endereco, req.body.email, req.body.status, req.body.cpf, req.body.perfil, cliente);
        await UsuarioBO.alterarUsuario(usuario);

        res.status(200).json({
            status: req.body.status,
            message: 'usuario atualizado com sucesso'
        });

    }

    async alterarStatusUsuario(req, res) {

        let usuario = new Usuario()
        usuario.id = req.params.id;
        usuario = await UsuarioBO.obterUsuario(usuario);
        await UsuarioBO.ativarDesativarUsuario(usuario);

        res.status(200).json({
            status: req.body.status,
            message: 'status do usuario atualizado com sucesso'
        });

    }

}

module.exports = UsuarioController;