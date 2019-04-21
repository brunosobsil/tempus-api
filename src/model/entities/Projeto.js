class Projeto {
    constructor(id, nome, descricaoAtividades, horasEstimadas, horasRealizadas) {
        this._id = id;
        this._nome = nome;
        this._descricaoAtividades = descricaoAtividades;
        this._horasEstimadas = horasEstimadas;
        this._horasRealizadas = horasRealizadas;
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
        return this._descricao_Atividades;
    }

    set descricaoAtividades(descricaoAtividades) {
        this._descricaoAtividades = descricaoAtividades;
    }

    get horasEstimadas() {
        return this.horasEstimadas;
    }

    set horasEstimadas(horasEstimadas) {
        this._horasEstimadas = horasEstimadas;
    }

    get horasRealizadas() {
        return this.horasRealizadas;
    }

    set horasRealizadas(horasRealizadas) {
        this._horasRealizadas = horasRealizadas;
    }
}

module.exports = Projeto;