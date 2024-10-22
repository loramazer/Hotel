const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

// Rota POST para cadastro
router.post('/cadastrar', cadastroController.cadastrarCliente);

module.exports = router;
