const Usuario = require('./Usuario');

class Analista extends Usuario{
    constructor(nome, endereco, email, status, cpf, perfil, superior, habilidade, nivel){
        super(nome, endereco, email, status, cpf, perfil);
        this._superior = superior;
        this._habilidade = habilidade;
        this._nivel = nivel;
    }

    get superior(){
        return this._superior;
    }

    set superior(superior){
        this._superior = superior;
    }

    get habilidade(){
        return this._habilidade;
    }

    set habilidade(habilidade){
        this._habilidade = habilidade;
    }

    get nivel(){
        return this._nivel;
    }

    set nivel(nivel){
        this._nivel = nivel;
    }
}

module.exports = Analista;