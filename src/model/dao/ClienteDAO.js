const { Cliente } = require('../orm/models');

class ClienteDAO {

    async obterCliente(cliente) {
        const cli = await Cliente.findByPk(cliente.id);
        return cli;
    }

    async obterClientes() {
        const clientes = await Cliente.findAll();
        return clientes;
    }

    async incluirCliente(cliente) {
        let newCli = await Cliente.create({
              nome: cliente.nome,
              endereco: cliente.endereco,
              email: cliente.email,
              status: cliente.status,
              razao_social: cliente.razaoSocial,
              cnpj: cliente.cnpj,
              nome_responsavel: cliente.nomeResponsavel
        });

        return newCli.id;
    }

    async alterarCliente(cliente) {
        await Cliente.update({
            nome: cliente.nome,
            endereco: cliente.endereco,
            email: cliente.email,
            status: cliente.status,
            razao_social: cliente.razaoSocial,
            cnpj: cliente.cnpj,
            nome_responsavel: cliente.nomeResponsavel
        }, {
            where: { id: cliente.id }
        });
    }

    async excluirCliente(cliente) {
        await Cliente.destroy({
            where: { id: cliente.id }
        });
    }

}

module.exports = new ClienteDAO();