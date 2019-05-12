class Agendamento {

    constructor(id, dataHoraAgendamento, atendimento, usuario) {
        this._id = id;
        this._usuario = usuario;
        this._dataHoraAgendamento = dataHoraAgendamento;
        this._atendimento = atendimento;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get dataHoraAgendamento() {
        return this._dataHoraAgendamento;
    }

    set dataHoraAgendamento(dataHoraAgendamento) {
        this._dataHoraAgendamento = dataHoraAgendamento;
    }

    get dataExclusao() {
        return this._dataExclusao;
    }

    set dataExclusao(dataExclusao) {
        this._dataExclusao = dataExclusao;
    }

    get atendimento() {
        return this._atendimento;
    }

    set atendimento(atendimento) {
        this._atendimento = atendimento;
    }

    get usuario() {
        return this._usuario;
    }

    set usuario(usuario) {
        this._usuario = usuario;
    }
}

module.exports = Agendamento;