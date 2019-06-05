const RelatorioController = require('../controllers/RelatorioController');
const controller = new RelatorioController();

module.exports = function (app) {
    app.get('/relatorio/os/:status/:data_inicio/:data_final', controller.obterOrdemServicoPorStatus);
    app.get('/relatorio/usuario/:data_inicio/:data_final', controller.obterHorasPorUsuarios);
    app.get('/relatorio/projeto/:data_inicio/:data_final', controller.obterHorasPorProjetos);
    //app.get('/relatorio/atendimento/:data_inicio/:data_final', controller.relatorioAtendimentosPorAnalista);
    //app.get('/relatorio/cliente/ranking/:data_inicio/:data_final', controller.relatorioRankingCliente);
    //app.get('/relatorio/analista/ranking/:data_inicio/:data_final', controller.relatorioRankingAnalista);
}