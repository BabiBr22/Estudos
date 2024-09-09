// Vamos usar um array simples para simular um "banco de dados" de clientes
let clientes = [
    { id: 1, nome: 'Cliente 1', email: 'cliente1@example.com' },
    { id: 2, nome: 'Cliente 2', email: 'cliente2@example.com' }
];

// Obter todos os clientes
const obterClientes = (req, res) => {
    res.json(clientes);
};

// Obter cliente por ID
const obterClientePorId = (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(cli => cli.id === id);

    if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }

    res.json(cliente);
};

// Criar um novo cliente
const criarCliente = (req, res) => {
    const { nome, email } = req.body;
    const novoCliente = { 
        id: clientes.length + 1, // Gerar um novo ID (simulação)
        nome, 
        email 
    };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
};

// Atualizar um cliente existente
const atualizarCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email } = req.body;
    const cliente = clientes.find(cli => cli.id === id);

    if (!cliente) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }

    cliente.nome = nome || cliente.nome;
    cliente.email = email || cliente.email;

    res.json(cliente);
};

// Excluir um cliente
const excluirCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const indice = clientes.findIndex(cli => cli.id === id);

    if (indice === -1) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }

    clientes.splice(indice, 1);
    res.status(204).send(); // Sem conteúdo ao excluir com sucesso
};

module.exports = {
    obterClientes,
    obterClientePorId,
    criarCliente,
    atualizarCliente,
    excluirCliente
};
