const Pessoa = require('./Pessoa');

class PessoaFisica extends Pessoa{

    constructor(nome, endereco, email, status, cpf){
        super(nome, endereco, email, status);
        this._cpf = cpf;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

}

module.exports = PessoaFisica;