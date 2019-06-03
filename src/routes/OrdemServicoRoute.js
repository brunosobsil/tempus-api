const OrdemServicoController = require('../controllers/OrdemServicoController');
const controller = new OrdemServicoController();

module.exports = function (app) {
    app.get('/os', controller.obterOrdemServico);
    app.get('/os/:id', controller.obterOrdemServico);
    app.delete('/os/:id', controller.excluirOrdemServico);
    app.post('/os', controller.incluirOrdemServico);
    app.put('/os/:id', controller.alterarOrdemServico);
    app.put('/os/:id/cancelar', controller.cancelarOrdemServico);
    //app.put('/os/:id/aprovar', controller.cancelarOrdemServico);
    //app.get('/os/:data_inicio/:data_final', controller.relatorioHorasAnalista);
    //app.get('/os/cliente-ranking/:data_inicio/:data_final', controller.relatorioRankingCliente);
    //app.get('/os/analista-ranking/:data_inicio/:data_final', controller.relatorioRankingAnalista);
}