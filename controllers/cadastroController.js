const db = require('../config/db');
const bcrypt = require('bcrypt');

// Função para cadastrar cliente
exports.cadastrarCliente = async (req, res) => {
    const { nome, cpf, rg, endereco, telefone, email, data_nascimento, senha, senhaConfirmacao } = req.body;

    // Verificar se os campos obrigatórios estão preenchidos
    if (!nome || !cpf || !telefone || !email || !senha || !senhaConfirmacao) {
        return res.status(400).send('Todos os campos obrigatórios devem ser preenchidos.');
    }

    // Verificar se a senha e a confirmação são iguais
    if (senha !== senhaConfirmacao) {
        return res.status(400).send('As senhas não coincidem.');
    }

    try {
        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(senha, 10);

        const sqlCliente = `
            INSERT INTO Clientes (nome, cpf, rg, endereco, telefone, email, data_nascimento)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;

        db.query(sqlCliente, [nome, cpf, rg, endereco, telefone, email, data_nascimento], (err, result) => {
            if (err) {
                console.error('Erro ao cadastrar cliente:', err);
                return res.status(500).send('Erro ao cadastrar cliente');
            }

            console.log('Cliente cadastrado com sucesso:', result.insertId);
            const clienteId = result.insertId;

            // Cadastro do usuário
            const sqlUsuario = `
                INSERT INTO usuarios (cliente_id, email, senha)
                VALUES (?, ?, ?);
            `;

            db.query(sqlUsuario, [clienteId, email, hashedPassword], (errUsuario, resultUsuario) => {
                if (errUsuario) {
                    console.error('Erro ao cadastrar usuário:', errUsuario);
                    return res.status(500).send('Erro ao cadastrar usuário');
                } else {
                    console.log('Usuário cadastrado com sucesso:', resultUsuario.insertId);

                    // Redirecionar para a página de login com mensagem de sucesso
                    req.flash('success', 'Cadastro realizado com sucesso!'); // Usando flash para mensagens
                    return res.redirect('/login'); // Certifique-se de que a rota esteja correta
                }
            });
        });
    } catch (error) {
        console.error('Erro inesperado:', error);
        return res.status(500).send('Erro inesperado durante o cadastro.');
    }
};
