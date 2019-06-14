var cepPromise = require("cep-promise");

class ConsultaCepBO {
    async consultaCep(cep){
        return await cepPromise(cep);
    }
}

module.exports = new ConsultaCepBO();