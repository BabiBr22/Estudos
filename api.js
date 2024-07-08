const express = require('express')
const app = express()

app.get('/e-palindromo', function(req, res){
    res.send('esta funcionando')
})

app.listen(8000)