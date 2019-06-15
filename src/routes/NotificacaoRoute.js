const NotificacaoController = require('../controllers/NotificacaoController');
const controller = new NotificacaoController();

module.exports = function (app) {
    app.get('/email/os/:id', controller.enviarEmailOS);
}