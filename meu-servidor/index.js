const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello, World!');
});

app.get('/sobre', (req, res) =>{
    res.send('Vaga-lumes são insetos conhecidos por sua bioluminescência, que é a capacidade de produzir luz através de um processo químico chamado oxidação biológica. Esse processo envolve a molécula de luciferina, que, ao oxidar, emite luz sem gerar calor. Os vaga-lumes controlam essa luz para atrair parceiros durante a reprodução, mas a iluminação artificial pode prejudicar esse processo, afetando sua reprodução.');
});

app.listen(port,()=>{
console.log(`Servidor rodando em http://localhost:${port}`)
})