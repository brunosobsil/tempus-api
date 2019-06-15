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

        let result;
        let cliente = new Cliente( null,
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
                                   req.body.razao_social, 
                                   req.body.cnpj, 
                                   req.body.nome_responsavel);
        cliente = await ClienteBO.incluirCliente(cliente);

        if(cliente.error) {
            result = { error: cliente.message };
        } else {
            result = { id: cliente.body, status: req.body.status, message: cliente.message };
        }

        res.status(cliente.status_code).json(result);

    }

    async alterarCliente(req, res) {

        let result;
        let cliente = new Cliente( req.params.id, 
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
                                   req.body.razao_social, 
                                   req.body.cnpj, 
                                   req.body.nome_responsavel);
        cliente = await ClienteBO.alterarCliente(cliente);

        if(cliente.error) {
            result = { error: cliente.message };
        } else {
            result = { status: req.body.status, message: cliente.message };
        }

        res.status(cliente.status_code).json(result);

    }

    async excluirCliente(req, res) {
        let cliente = new Cliente();
        let result;

        if (req.params.id) {
            cliente.id = req.params.id;
        }

        cliente = await ClienteBO.excluirCliente(cliente);

        if(cliente.error) {
            result = { error: cliente.message }
        } else {
            result = { status: req.body.status, message: cliente.message }
        }

        res.status(cliente.status_code).json(result);
    }

}

module.exports = ClienteController;