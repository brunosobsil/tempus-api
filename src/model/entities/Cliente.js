const PessoaJuridica = require('./PessoaJuridica');

class Cliente extends PessoaJuridica {

    constructor(id, nome, endereco, numero, complemento, bairro, cidade, uf, cep, telefone, email, status, razao_social, cnpj, nome_responsavel) {
        super(nome, endereco, numero, complemento, bairro, cidade, uf, cep, telefone, email, status, razao_social, cnpj, nome_responsavel);
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

}

module.exports = Cliente;