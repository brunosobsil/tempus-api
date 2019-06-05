const ProjetoController = require('../controllers/ProjetoController');
const controller = new ProjetoController();

module.exports = function (app) {
    app.get('/projeto', controller.obterProjeto);
    app.get('/projeto/:id', controller.obterProjeto);
    app.delete('/projeto/:id', controller.excluirProjeto);
    app.post('/projeto', controller.incluirProjeto);
    app.put('/projeto/:id', controller.alterarProjeto);
}