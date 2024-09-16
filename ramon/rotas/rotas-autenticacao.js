const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const controlador = require('../controladores/controlador-autenticacao.js'); // Certifique-se de que o caminho está correto


router.post('/login', controlador.login)
router.post('/logout', controlador.logout)
=======
const controlador = require('../controladores/controlador-autenticacao')

router.post('/login', controlador.login)
>>>>>>> a5241c4a341ca703619277f4202659b21b049ffa

module.exports = router;