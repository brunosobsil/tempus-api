const ConsultaCepController = require('../controllers/ConsultaCepController');
const controller = new ConsultaCepController();

module.exports = function (app) {
    app.get('/cep/:cep', controller.consultaCep);
}