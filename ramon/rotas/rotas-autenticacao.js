const express = require('express');
const router = express.Router();
const controlador = require('../controladores/controlador-autenticacao');
const autenticarToken = require('./middlewares/autenticarToken'); // Middleware que valida o token

app.use('/produtos', autenticarToken, rotasprodutos);
app.use('/clientes', autenticarToken, rotascliente);


router.post('/login', controlador.login); // Rota para fazer login

module.exports = router;
