const PessoaFisica = require('./PessoaFisica');

class Usuario extends PessoaFisica {

    constructor(id, nome, endereco, numero, complemento, bairro, cidade, uf, cep, telefone, email, status, cpf, perfil, senha, coordenador, cliente) {
        super(nome, endereco, numero, complemento, bairro, cidade, uf, cep, telefone, email, status, cpf);
        this._coordenador = coordenador;
        this._cliente = cliente;
        this._perfil = perfil;
        this._senha = senha;
        this._id = id;
    }

    get perfil() {
        return this._perfil;
    }

    set perfil(perfil) {
        this._perfil = perfil;
    }

    get senha() {
        return this._senha;
    }

    set senha(senha) {
        this._senha = senha;
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