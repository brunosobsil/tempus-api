class Projeto {
    constructor(id, nome, descricaoAtividades, horasEstimadas, horasRealizadas, atendimento) {
        this._id = id;
        this._nome = nome;
        this._descricaoAtividades = descricaoAtividades;
        this._horasEstimadas = horasEstimadas;
        this._horasRealizadas = horasRealizadas;
        this._atendimento = atendimento;
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

    get descricaoAtividades() {
        return this._descricaoAtividades;
    }

    set descricaoAtividades(descricaoAtividades) {
        this._descricaoAtividades = descricaoAtividades;
    }

    get horasEstimadas() {
        return this._horasEstimadas;
    }

    set horasEstimadas(horasEstimadas) {
        this._horasEstimadas = horasEstimadas;
    }

    get horasRealizadas() {
        return this._horasRealizadas;
    }

    set horasRealizadas(horasRealizadas) {
        this._horasRealizadas = horasRealizadas;
    }

    get atendimento() {
        return this._atendimento;
    }

    set atendimento(atendimento) {
        this._atendimento = atendimento;
    }
}

module.exports = Projeto;