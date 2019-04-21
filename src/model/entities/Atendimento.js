const PessoaFisica = require('./Atendimento');

class Atendimento {

    constructor(id, assunto, descricao, data_sugerida, data_exclucao) {
        this._id = id;
        this._assunto = assunto;
        this._descricao = descricao;
        this._data_sugerida = data_sugerida;
        this._data_exclucao = data_exclucao;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get assunto() {
        return this._assunto;
    }

    set assunto(assunto) {
        this._assunto = assunto;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }

    get data_sugerida() {
        return this._data_sugerida;
    }

    set data_sugerida(data_sugerida) {
        this._data_sugerida = data_sugerida;
    }

    get data_exclusao() {
        return this._data_exclusao;
    }

    set data_exclusao(data_exclusao) {
        this._data_exclusao = data_exclusao;
    }
}

module.exports = Atendimento;