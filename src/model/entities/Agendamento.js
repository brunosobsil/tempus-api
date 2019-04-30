class Agendamento {

    constructor(id,  dataSugerida, dataExclusao) {
        this._id = id;
        this._dataSugerida = dataSugerida;
        this._dataExclusao = dataExclusao;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
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

module.exports = Agendamento;