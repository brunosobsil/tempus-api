const OrdemServicoController = require('../controllers/OrdemServicoController');
const controller = new OrdemServicoController();

module.exports = function (app) {
    app.get('/os', controller.obterOS);
    app.get('/os/:id', controller.obterOS);
    app.delete('/os/:id', controller.excluirOS);
    app.post('/os', controller.incluirOS);
    app.put('/os/:id', controller.alterarOS);
    app.put('/os/:id/cancelar', controller.cancelarOS);
}