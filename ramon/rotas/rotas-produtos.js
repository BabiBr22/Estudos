const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-produto.js')
const { validadorDeCookie } = require('../middlewares/validadorDeCookie.js') // Mantém apenas essa linha




router.get('', validadorDeCookie, controlador.listProdutos)
router.get('/:id', controlador.getProduto)
router.post('', controlador.createProduto)
router.post('/:id', controlador.updateProduto)
router.delete('/:id',controlador.deleteProduto)

module.exports = router;