const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Rota GET para exibir a página de login
router.get('/login', loginController.exibirPaginaLogin);

// Rota POST para processar o login
router.post('/login', loginController.processarLogin);

module.exports = router;
