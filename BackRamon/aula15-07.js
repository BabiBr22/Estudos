
var pessoa = {nome:'Bárbara', idade: 20, cpf:2919303213 , email:'barbara@gmail.com',hobbies:['jogar', 'ver Alanzoka', 'dormir'], saudacao:function(){
    return 'Meu nome é ' + this.nome + '.'}
}



console.log(pessoa.saudacao())
console.log(pessoa.hobbies[0])