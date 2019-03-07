const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const controller = new UsuarioController();

router.get('/usuario', controller.obterUsuario);
router.get('/usuario/:id', controller.obterUsuario);
router.post('/usuario', controller.incluirUsuario);
router.put('/usuario/:id', controller.alterarUsuario);
router.put('/usuario/:id', controller.ativarDesativarUsuario);

module.exports = router;