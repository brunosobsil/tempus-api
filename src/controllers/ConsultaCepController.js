const ConsultaCepBO = require('../model/bo/ConsultaCepBO');

class ConsultaCepController {

    async consultaCep(req, res) {

        let cep = await ConsultaCepBO.consultaCep(req.params.cep);
        res.send(cep);

    }

}

module.exports = ConsultaCepController;