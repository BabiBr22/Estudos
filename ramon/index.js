const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const isPalindrome = require('./atividade.js');


app.use(bodyParser.json());

app.post('/e-palindromo', function(req, res){
    const palavra = req.body.palavra;
    const resposta = isPalindrome(palavra);
    if(resposta === true){
        res.send('é palindromo');
    } else {
        res.send('não é palindromo');
    }
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});


module.exports = isPalindrome;
