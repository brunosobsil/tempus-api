const Pessoa = require('./Pessoa');

class PessoaJuridica extends Pessoa{

    constructor(nome, endereco, numero, complemento, bairro, cidade, uf, cep, telefone, email, status, razao_social, cnpj, nome_responsavel){
        super(nome, endereco, numero, complemento, bairro, cidade, uf, cep, telefone, email, status);
        this._nome_responsavel = nome_responsavel;
        this._razao_social = razao_social;
        this._cnpj = cnpj;
    }

    get razao_social(){
        return this._razao_social;
    }

    set razao_social(razao_social){
        this._razao_social = razao_social;
    }

    get cnpj(){
        return this._cnpj;
    }

    set cnpj(cnpj){
        this._cnpj = cnpj;
    }

    get nome_responsavel(){
        return this._nome_responsavel;
    }

    set nome_responsavel(nome_responsavel){
        this._nome_responsavel = nome_responsavel;
    }

}

module.exports = PessoaJuridica;