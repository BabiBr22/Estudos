const express = require('express');
const router = express.Router();
const controladorCliente = require('../controladores/controlador-cliente');

// Obter todos os clientes
router.get('/', controladorCliente.obterClientes);

// Obter cliente por ID
router.get('/:id', controladorCliente.obterClientePorId);

// Criar um novo cliente
router.post('/', controladorCliente.criarCliente);

// Atualizar um cliente existente
router.put('/:id', controladorCliente.atualizarCliente);

// Excluir um cliente
router.delete('/:id', controladorCliente.excluirCliente);

module.exports = router;
