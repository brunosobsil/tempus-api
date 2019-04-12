class UsuarioHabilidade  {

    constructor(nivel, usuario, habilidade) {
        this._nivel = nivel;
        this._usuario = usuario;
        this._habilidade = habilidade;
    }

    get nivel(){
        return this._nivel;
    }

    set nivel(nivel){
        this._nivel = nivel;
    }

    get usuario(){
        return this._usuario;
    }

    set usuario(usuario){
        this._usuario = usuario;
    }

    get habilidade(){
        return this._habilidade;
    }

    set habilidade(habilidade){
        this._habilidade = habilidade;
    }

}

module.exports = UsuarioHabilidade;