require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas_produtos = require('./rotas/rotas-produtos.js')
const clientes = require('./rotas/rotas-clientes.js')
const rotas_autenticacao = require('./rotas/rotas-autenticacao.js')
const cookieParser = require('cookie-parser')

app.use(bodyParser.json())
app.use(cookieParser())
app.use('/produtos', rotas_produtos)
app.use('/clientes', clientes)
app.use('/auth', rotas_autenticacao)




app.listen(8000)

module.exports = app;