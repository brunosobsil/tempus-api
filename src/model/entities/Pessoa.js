class Pessoa {

    constructor(nome, endereco, numero, complemento, bairro, cidade, uf, cep, telefone, email, status){
        this._nome = nome;
        this._endereco = endereco;
        this._numero = numero;
        this._complemento = complemento;
        this._bairro = bairro;
        this._cidade = cidade;
        this._uf = uf;
        this._cep = cep;
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

    get numero(){
        return this._numero;
    }

    set numero(numero){
        this._numero = numero;
    }

    get complemento(){
        return this._complemento;
    }

    set complemento(complemento){
        this._complemento = complemento;
    }

    get bairro(){
        return this._bairro;
    }

    set bairro(bairro){
        this._bairro = bairro;
    }

    get cidade(){
        return this._cidade;
    }

    set cidade(cidade){
        this._cidade = cidade;
    }

    get uf(){
        return this._uf;
    }

    set uf(uf){
        this._uf = uf;
    }

    get cep(){
        return this._cep;
    }

    set cep(cep){
        this._cep = cep;
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