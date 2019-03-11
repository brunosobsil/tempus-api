const HabilidadeController = require('../controllers/HabilidadeController');
const controller = new HabilidadeController();

module.exports = function (app) {
    app.get('/habilidade', controller.obterHabilidade);
    app.get('/habilidade/:id', controller.obterHabilidade);
    app.delete('/habilidade/:id', controller.excluirHabilidade);
    app.post('/habilidade', controller.incluirHabilidade);
    app.put('/habilidade/:id', controller.alterarHabilidade);
}