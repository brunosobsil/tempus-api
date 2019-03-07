const PessoaFisica = require('./PessoaFisica');

class Usuario extends PessoaFisica{
    
    constructor(nome, endereco, email, status, cpf, perfil, id){
        super(nome, endereco, email, status, cpf);
        this._perfil = perfil;
        this._id = id;
    }

    get perfil(){
        return this._perfil;
    }

    set perfil(perfil){
        this._perfil = perfil;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

}

module.exports = Usuario;