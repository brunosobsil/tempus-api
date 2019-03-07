const Pessoa = require('./Pessoa');

class PessoaJuridica extends Pessoa{

    constructor(nome, endereco, email, status, razaoSocial, cnpj, nomeResponsavel){
        super(nome, endereco, email, status);
        this._razaoSocial = razaoSocial;
        this._cnpj = cnpj;
        this._nomeResponsavel = nomeResponsavel;
    }

    get razaoSocial(){
        return this._razaoSocial;
    }

    set razaoSocial(razaoSocial){
        this._razaoSocial = razaoSocial;
    }

    get cnpj(){
        return this._cnpj;
    }

    set cnpj(cnpj){
        this._cnpj = cnpj;
    }

    get nomeResponsavel(){
        return this._nomeResponsavel;
    }

    set nomeResponsavel(nomeResponsavel){
        this._nomeResponsavel = nomeResponsavel;
    }

}

module.exports = PessoaJuridica;