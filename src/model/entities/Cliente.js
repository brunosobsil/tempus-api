const PessoaJuridica = require('./PessoaJuridica');

class Cliente extends PessoaJuridica {

    constructor(id, nome, endereco, telefone, email, status, razaoSocial, cnpj, nomeResponsavel) {
        super(nome, endereco, telefone, email, status, razaoSocial, cnpj, nomeResponsavel);
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