const NotificacaoController = require('../controllers/NotificacaoController');
const controller = new NotificacaoController();

module.exports = function (app) {
    app.post('/email/os/:id', controller.enviarEmailOS);
}