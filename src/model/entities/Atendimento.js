class Atendimento {

    constructor(id, assunto, descricao, dataSugerida, dataExclusao) {
        this._id = id;
        this._assunto = assunto;
        this._descricao = descricao;
        this._dataSugerida = dataSugerida;
        this._dataExclusao = dataExclusao;
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

    get dataSugerida() {
        return this._dataSugerida;
    }

    set dataSugerida(dataSugerida) {
        this._dataSugerida = dataSugerida;
    }

    get dataExclusao() {
        return this._dataExclusao;
    }

    set dataExclusao(dataExclusao) {
        this._dataExclusao = dataExclusao;
    }
}

module.exports = Atendimento;