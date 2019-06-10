const OrdemServicoController = require('../controllers/OrdemServicoController');
const controller = new OrdemServicoController();

module.exports = function (app) {
    app.get('/os', controller.obterOrdemServico);
    app.get('/os/:id', controller.obterOrdemServico);
    app.delete('/os/:id', controller.excluirOrdemServico);
    app.post('/os', controller.incluirOrdemServico);
    app.put('/os/:id', controller.alterarOrdemServico);
    app.put('/os/:id/status/:status', controller.alterarStatusOrdemServico);
}