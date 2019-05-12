const PessoaFisica = require('./PessoaFisica');

class Usuario extends PessoaFisica {

    constructor(id, nome, endereco, email, status, cpf, perfil, cliente) {
        super(nome, endereco, email, status, cpf);
        this._cliente = cliente;
        this._perfil = perfil;
        this._id = id;
    }

    get perfil() {
        return this._perfil;
    }

    set perfil(perfil) {
        this._perfil = perfil;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get coordenador() {
        return this._coordenador;
    }

    set coordenador(coordenador) {
        this._coordenador = coordenador;
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(cliente) {
        this._cliente = cliente;
    }

}

module.exports = Usuario;