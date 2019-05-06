const Cliente = require('../model/entities/Cliente');
const ClienteBO = require('../model/bo/ClienteBO');

class ClienteController {

    async obterCliente(req, res) {

        if (req.params.id) {
            // Obter cliente por ID 
            let cliente = new Cliente();
            cliente.id = req.params.id;
            cliente = await ClienteBO.obterCliente(cliente);
            res.send(cliente);

        } else {
            // Obter todos os clientes
            let clientes = await ClienteBO.obterClientes();
            res.send(clientes);
        }

    }

    async incluirCliente(req, res) {

        let cliente = new Cliente(null, req.body.nome, req.body.endereco, req.body.email, req.body.status, req.body.razaoSocial, req.body.cnpj, req.body.nomeResponsavel);
        let id = await ClienteBO.incluirCliente(cliente);
        
        res.status(201).json({
            status: req.body.status,
            message: 'cliente inserido com sucesso',
            id: id
        });

    }

    async alterarCliente(req, res) {

        let cliente = new Cliente(req.params.id, req.body.nome, req.body.endereco, req.body.email, req.body.status, req.body.razaoSocial, req.body.cnpj, req.body.nomeResponsavel);
        await ClienteBO.alterarCliente(cliente);

        res.status(200).json({
            status: req.body.status,
            message: 'cliente atualizado com sucesso'
        });

    }

    async excluirCliente(req, res) {

        if (req.params.id) {
            let cliente = new Cliente();
            cliente.id = req.params.id;
            await ClienteBO.excluirCliente(cliente);
            res.status(200).json({
                status: req.body.status,
                message: 'cliente excluido com sucesso.'
            });
        }

    }

}

module.exports = ClienteController;