const AtendimentoController = require('../controllers/AtendimentoController');
const controller = new AtendimentoController();

module.exports = function (app) {
    app.get('/atendimento', controller.obterAtendimento);
    app.get('/atendimento/:id', controller.obterAtendimento);
    app.post('/atendimento', controller.incluirAtendimento);
    app.put('/atendimento/:id', controller.alterarAtendimento);
    app.delete('/atendimento/:id', controller.excluirAtendimento);
    //app.get('/atendimento/:id/agendamentos', controller.obterAgendamentos);
    //app.get('/atendimento/:id/projetos', controller.obterProjetos);
    //app.get('/atendimento/:data_inicio/:data_final', controller.relatorioAtendimentosPorAnalista);
}