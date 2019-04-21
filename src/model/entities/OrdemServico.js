class OrdemServico {
    constructor(id, status, descricao, dataHoraInicio, dataHoraFinal) {
        this._id = id;
        this._status = status;
        this._descricao = descricao;
        this._dataHoraInicio = dataHoraInicio;
        this._dataHoraFinal = dataHoraFinal;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get status() {
        return this._status;
    }

    set status(status) {
        this._status = status;
    }

    get dataHoraInicio() {
        return this._dataHoraInicio;
    }

    set dataHoraInicio(dataHoraInicio) {
        this._dataHoraInicio = dataHoraInicio;
    }
    
    get dataHoraFinal() {
        return this._dataHoraFinal;
    }

    set dataHoraFinal(dataHoraFinal) {
        this._dataHoraFinal = dataHoraFinal;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }
}

module.exports = OrdemServico;