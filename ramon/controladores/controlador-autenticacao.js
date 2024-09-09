const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'sua_chave_secreta'; // Idealmente, armazene no arquivo .env para maior segurança

// Função de login que gera o token JWT
const login = async (req, res) => {
    const { email, senha } = req.body;

    // Simulação de busca de um usuário no banco de dados
    const usuario = { 
        id: 1, 
        email: 'usuario@exemplo.com', 
        senha: await bcrypt.hash('senha123', 10) // Senha hash armazenada no banco
    };

    // Verificar se o email existe
    if (usuario.email !== email) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    // Verificar se a senha está correta
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
        return res.status(401).json({ mensagem: 'Senha incorreta' });
    }

    // Gerar o token JWT
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, secretKey, { expiresIn: '1h' });

    return res.json({ token });
};

// Middleware para autenticar o token JWT
const autenticarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(403).json({ mensagem: 'Token não fornecido' });
    }

    // Verificar o token
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ mensagem: 'Token inválido' });
        }
        req.user = user;
        next(); // Avançar para a próxima middleware ou rota
    });
};

module.exports = { login, autenticarToken };
