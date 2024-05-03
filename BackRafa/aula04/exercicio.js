//Atividade 1

// let soma = 0
// for(let i = 0; i <= 100; i++){

//     soma += i
// }
// console.log(soma)

//Aividade 2

// let tabuada = 5;
// for(let i = 0; i <= 10; i++){
//     console.log(tabuada * i)
// }

//Atividade 3

// let numero = document.getElementById('inpNumero')
// let resultado = document.getElementById('resultado')
// function gerarTabuada(){
//     let tabuada = 0;
//     let n = Number(numero.value)
//     resultado.innerHTML = ''
//     for(let i = 0; i <= 10; i++){
//         tabuada = (i * numero.value)
//         console.log(n + "x" + i + "=" + tabuada)
//         resultado.innerHTML += n + " x " + i + " = " + tabuada + "<br>"
//     }
// }

//Atividade 4

// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

//Atividade 5

// for(let i = 0; i <= 20; i++){
//     if(i % 2 == 1){
//         console.log(i)
//     }
// }

//Atividade 6

// for(let i = 0; i <= 10; i++){
//     console.log(i*2)
// }

//Atividade 7

// for(let i = 1; i <= 10; i++){
//     console.log(i)
//     if(i >= 0 ){
//         i--
//         console.log(i)
//     }
// }

//Atividade 8

// let numerox = 1
// let numero = prompt("Digite um número: ")
// for(let i = 1 ; i < numero; i++){
//     numerox = (numero - i)
//     console.log(numero * numerox)
// }

// //Atividade 9 

// for(let i = 1; i <= 100; i++){

//     if(i % 3 == 0 && i % 5 ==0){
//         console.log("FizzBuzz")
//     }else if(i % 3 == 0){
//         console.log("Fizz")
//     }else if(i % 5 == 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }


//Atividade 10

// let div = parseFloat(1)
// let resultado = parseFloat(0)
// for(let i = 1 ; i <= 10; i++){
//     resultado = div / i
//     console.log(resultado.toFixed(3))
// }

//Atividade 11

// let numeroPar = 0
// let numeroImpar = 0
// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         numeroPar++
//     }else{
//         numeroImpar++
//     }
// }
// console.log(" Esses são os números pares: " + numeroPar + "\n E esse os impares: " + numeroImpar)

//Atividade 12

// let lista = []

// for(let i = 0 ; i <= 4; i++){
//     lista[i] = prompt("Digite 4 números: ")
// }
//     console.log(`Esse é o maior número da lista ${Math.max.apply(lista, lista)}, e esse o menor número da lista ${Math.min.apply(lista, lista)}. `)

//Atividade 13

let lista = []
let media = 0

for(let i = 0; i < 4; i++){
    lista[i] = prompt("Digite os números aqui: ")
    soma = (lista + i)
    console.log(soma)
}