const UsuarioHabilidadeController = require('../controllers/UsuarioHabilidadeController');
const controller = new UsuarioHabilidadeController();

module.exports = function (app) {
    app.get('/usuario/:id_usuario/habilidade', controller.obterUsuarioHabilidade);
    app.post('/usuario/:id_usuario/habilidade', controller.incluirUsuarioHabilidade);
    app.put('/usuario/:id_usuario/habilidade/:id_habilidade', controller.alterarUsuarioHabilidade);
    app.delete('/usuario/:id_usuario/habilidade/:id_habilidade', controller.excluirUsuarioHabilidade);    
    app.post('/usuario/:id_usuario/habilidades', controller.incluirUsuarioHabilidades);
    app.delete('/usuario/:id_usuario/habilidades', controller.excluirUsuarioHabilidades);    
}