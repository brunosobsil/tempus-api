const dao = require('../dao/ClienteDAO');

class ClienteBO {
    
    obterCliente(cliente){
        return dao.obterCliente(cliente);
    }

    obterClientes(){
        return dao.obterClientes();
    }

    incluirCliente(cliente){
        return dao.incluirCliente(cliente);
    }

    alterarCliente(cliente){
        dao.alterarCliente(cliente);
    }

    excluirCliente(cliente){
        dao.excluirCliente(cliente);
    }
}

module.exports = new ClienteBO();