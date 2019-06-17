class Agendamento {

    constructor(id, data_hora_agendamento, atendimento, usuario) {
        this._id = id;
        this._usuario = usuario;
        this._data_hora_agendamento = data_hora_agendamento;
        this._atendimento = atendimento;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get data_hora_agendamento() {
        return this._data_hora_agendamento;
    }

    set data_hora_agendamento(data_hora_agendamento) {
        this._data_hora_agendamento = data_hora_agendamento;
    }

    get data_exclusao() {
        return this._data_exclusao;
    }

    set data_exclusao(data_exclusao) {
        this._data_exclusao = data_exclusao;
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