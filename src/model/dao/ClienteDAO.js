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
              numero: cliente.numero,
              complemento: cliente.complemento,
              bairro: cliente.bairro,
              cidade: cliente.cidade,
              uf: cliente.uf, 
              cep: cliente.cep,
              telefone: cliente.telefone,
              email: cliente.email,
              status: cliente.status,
              razao_social: cliente.razao_social,
              cnpj: cliente.cnpj,
              nome_responsavel: cliente.nome_responsavel
        });

        return newCli.id;
    }

    async alterarCliente(cliente) {
        await Cliente.update({
            nome: cliente.nome,
            endereco: cliente.endereco,
            numero: cliente.numero,
            complemento: cliente.complemento,
            bairro: cliente.bairro,
            cidade: cliente.cidade,
            uf: cliente.uf, 
            cep: cliente.cep,
            telefone: cliente.telefone,
            email: cliente.email,
            status: cliente.status,
            razao_social: cliente.razao_social,
            cnpj: cliente.cnpj,
            nome_responsavel: cliente.nome_responsavel
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