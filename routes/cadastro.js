const express = require('express');
const path = require('path');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

// Rota GET para exibir a página de cadastro
router.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/cadastro.html'));
});
// Rota GET para exibir a página de login
router.get('/login', (req, res) => {
    const mensagem = req.query.mensagem || '';
    res.render('login', { mensagem }); // Aqui, você deve renderizar o arquivo de login com a mensagem
});

// Rota para login
router.post('/login', cadastroController.loginCliente);

// Rota POST para processar o cadastro
router.post('/cadastrar', cadastroController.cadastrar);

module.exports = router;
