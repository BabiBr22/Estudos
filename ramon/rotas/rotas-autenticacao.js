const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-autenticacao.js'); // Certifique-se de que o caminho está correto


router.post('/login', controlador.login)
router.post('/logout', controlador.logout)

module.exports = router;