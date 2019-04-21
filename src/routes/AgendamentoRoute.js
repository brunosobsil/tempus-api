const AgendamentoController = require('../controllers/AgendamentoController');
const controller = new AgendamentoController();

module.exports = function (app) {
    app.get('/agendamento', controller.obterAgendamento);
    app.get('/agendamento/:id', controller.obterAgendamento);
    app.post('/agendamento', controller.incluirAgendamento);
    app.put('/agendamento/:id', controller.alterarAgendamento);
    app.delete('/agendamento/:id', controller.excluirAgendamento);
    app.get('/agendamento/:id/os', controller.obterOsPorAgendamento);
}