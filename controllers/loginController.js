const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.exibirPaginaLogin = (req, res) => {
    res.render('login'); // Renderiza a página de login
};

const connection = require('../config/db'); // Conexão com o banco de dados

exports.processarLogin = (req, res) => {
    const { email, senha } = req.body;

    // Verificar se o usuário existe na tabela 'usuarios'
    const query = 'SELECT * FROM usuarios WHERE email = ?'; // Ajuste aqui para não buscar senha ainda

    connection.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Erro ao fazer login:', err);
            return res.status(500).send('Erro ao processar login');
        }

        if (results.length > 0) {
            // Verificar a senha
            const usuario = results[0]; // Pega o primeiro usuário encontrado
            const senhaValida = await bcrypt.compare(senha, usuario.senha);

            if (senhaValida) {
                // Login bem-sucedido, redirecionar para a página inicial
                return res.redirect('/pagina-inicial'); // Redireciona para a página inicial após login
            } else {
                // Login falhou, exibir mensagem de erro
                return res.status(401).send('Email ou senha incorretos');
            }
        } else {
            // Login falhou, exibir mensagem de erro
            return res.status(401).send('Email ou senha incorretos');
        }
    });
};

exports.exibirPaginaLogin = (req, res) => {
    const mensagemSucesso = req.flash('success');
    res.render('login', { mensagemSucesso }); // Passando a mensagem para a visualização
};

