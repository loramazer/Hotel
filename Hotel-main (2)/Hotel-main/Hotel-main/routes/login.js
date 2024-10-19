const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

// Rota para exibir a página de login
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/login.html'));
});

// Rota para processar o login
router.post('/login', cadastroController.loginCliente);

module.exports = router;
