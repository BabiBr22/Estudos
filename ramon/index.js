const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const isPalindrome = require('./atividade.js');
const db = require('./db.json')


app.use(bodyParser.json());

app.get('/produtos', function(req, res){
    var produtos = db.produtos
    res.send(produtos)
});

app.get('/produtos/:id', function(req,res){
    const _id = req.params.id
    res.send(_id)
    //filtrar lista de produtos e retornar nos res.send() apenas o produto do id selecionado
})

app.listen(8000);
