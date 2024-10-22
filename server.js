// server.js
const express = require('express');
const flash = require('connect-flash');
const mysql = require('mysql2');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cadastroRoutes = require('./routes/cadastro');
const loginRoutes = require('./routes/login');

const reservaRoutes = require('./routes/reserva');  // Importa a rota de reservas

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'seu-segredo', resave: false, saveUninitialized: true }));

// Importar e usar o roteamento do cadastro
app.use('/cadastro', cadastroRoutes);
app.use('/reservas', reservaRoutes);  // Adiciona a rota de reservas


// Configurar o uso de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Suas outras rotas e middlewares
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.use(flash());

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
