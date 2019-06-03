class Pessoa {

    constructor(nome, endereco, telefone, email, status){
        this._nome = nome;
        this._endereco = endereco;
        this._telefone = telefone;
        this._email = email;
        this._status = status;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get endereco(){
        return this._endereco;
    }

    set endereco(endereco){
        this._endereco = endereco;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get telefone(){
        return this._telefone;
    }

    set telefone(telefone){
        this._telefone = telefone;
    }

    get status(){
        return this._status;
    }

    set status(status){
        this._status = status;
    }
}

module.exports = Pessoa;