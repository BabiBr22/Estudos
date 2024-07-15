
var pessoa = {nome:'Bárbara', idade: 20, cpf:2919303213 , email:'barbara@gmail.com',hobbies:['jogar', 'ver Alanzoka', 'dormir'], saudacao:function(){
    return 'Meu nome é ' + this.nome + '.'}, 
    endereco: 
    {rua:'rua do senai',
    bairro:'distrito industrial', 
    cidade:'São josé'}
}



console.log(pessoa.saudacao())
console.log(pessoa.hobbies[0])
console.log(pessoa.endereco.rua)

var carro = {nome: 'doblo', portas: 4, rodas:null, ano: 2010, funcionando: true, donos:['patricia', 'joao', 'rodolfo'], pecas:{pneu: 'gag',
motor: 'g2', cor: 'bordo'}, fabricante: function(){
    return 'Esse carro foi criado na Italia'
},

}

carro.nome = 'uno'

carro.rg = 7557675
delete carro.portas
console.log(carro)
console.log(carro.rg)




