const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');  // Importa uuid de 'uuid'
const fs = require('fs');
const path = require('path');

// Inicializa o aplicativo Express
const app = express();

// Middleware para analisar JSON no corpo das solicitações
app.use(bodyParser.json());

// Caminho para o arquivo de banco de dados
const dbPath = path.join(__dirname, 'db.json');

// Função para ler o banco de dados do arquivo
const readDb = () => {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, JSON.stringify({ produtos: [] }, null, 2));
    }
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data);
};

// Função para salvar o banco de dados no arquivo
const saveDb = (db) => {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

// Endpoint para listar todos os produtos
app.get('/produtos', (req, res) => {
    const db = readDb();
    res.json(db.produtos);
});

// Endpoint para obter um produto específico por ID
app.get('/produtos/:id', (req, res) => {
    const db = readDb();
    const id = req.params.id;
    const produto = db.produtos.find(p => p.id === id);
    if (!produto) {
        res.status(404).send('Produto não encontrado');
    } else {
        res.json(produto);
    }
});

// Endpoint para adicionar um novo produto
app.post('/produtos', (req, res) => {
    const db = readDb();
    const { nome, descricao, preco, imagem } = req.body;

    // Verifica se 'nome' e 'preco' foram fornecidos
    if (!nome || !preco) {
        return res.status(400).send({ error: 'Nome e preço devem ser informados' });
    }

    // Cria um novo ID
    const novoId = uuidv4();

    // Cria o novo produto
    const novoProduto = {
        id: novoId,
        nome,
        descricao,
        preco,
        imagem
    };

    // Adiciona o novo produto à lista
    db.produtos.push(novoProduto);
    saveDb(db);

    // Envia a resposta de sucesso
    res.status(201).json(novoProduto);
});

// Endpoint para atualizar um produto específico
app.put('/produtos/:id', (req, res) => {
    const db = readDb();
    const id = req.params.id;
    const { nome, descricao, preco, imagem } = req.body;

    const produtoIndex = db.produtos.findIndex(p => p.id === id);
    if (produtoIndex === -1) {
        return res.status(404).send('Produto não encontrado');
    }

    const produtoAtualizado = {
        id,
        nome: nome || db.produtos[produtoIndex].nome,
        descricao: descricao || db.produtos[produtoIndex].descricao,
        preco: preco || db.produtos[produtoIndex].preco,
        imagem: imagem || db.produtos[produtoIndex].imagem
    };

    db.produtos[produtoIndex] = produtoAtualizado;
    saveDb(db);

    res.json(produtoAtualizado);
});

// Endpoint para deletar um produto específico
app.delete('/produtos/:id', (req, res) => {
    const db = readDb();
    const id = req.params.id;
    const produtoIndex = db.produtos.findIndex(p => p.id === id);

    if (produtoIndex === -1) {
        return res.status(404).send('Produto não encontrado');
    }

    db.produtos.splice(produtoIndex, 1);
    saveDb(db);

    res.status(204).send();
});

// Inicia o servidor
app.listen(8000, () => {
    console.log('Servidor está rodando na porta 8000');
});




