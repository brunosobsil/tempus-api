class Habilidade {
    constructor(id, nome, descricao) {
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }
}

module.exports = Habilidade;