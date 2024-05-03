//Atividade 1

// let numero = 0;

// while(numero < 201){
//     if(numero % 2 == 0){
//         console.log(numero)
//     }
//     numero++

// }


//Atividade 2

// let idade = 0;

// while (idade < 18) {
//     alert(idade)
//     idade = prompt("Digite uma idade: ")
    
// }

// alert("Maior de idade: " + idade)


//Atividade 3

// let qtdNums, numero = 0, media = 0, controle = 0
// qtdNums = parseInt(prompt("Qtd da nº: "))
// while(controle < qtdNums){
//     numero += parseInt(prompt("Digite um nº: "))
//     controle++
// }
// media = numero / qtdNums
// alert(`A média é: ${media.toFixed(2)}`)

//Atividade 4

// let soma = 0 
// for(let i = 10; i <= 20; i++ ){
//     soma += i
// }
// console.log(soma)

//Atividade 5

// for(let i = 100; i < 200; i++){
//     if(i % 3 == 0 && i % 2 != 0){
//         console.log(i)
//     }
// }

//Atividas 6

// let tabuada = prompt("Digite uma tabuada: ")
// let tabuadaA = 0
// let o = 0

// for(let i = 0; i <= 10; i++){
//     tabuadaA = (i * tabuada)
//     console.log(tabuada, "x", o , "=", tabuadaA)
//     o++
// }

//Atividade 7

// let numero = 0;
// let soma = 0;

// for(let i = 0; i < 5; i++){
//     numero = Number(prompt("Digite um número: "))
//     if(numero > 7){
//         soma += numero
//     }
// }
// alert(soma)

//Atividade 8

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite um número: "));


alert(" (1)Adição \n (2)Subtração \n (3)Divisão \n (4)Multiplicação")
let escolha = prompt("Escolha uma das operações:")

switch(escolha){
    case "1":
        alert(numero1 + numero2)
    break

    case "2":
        alert(numero1 - numero2)
    break

    case "3":
        alert(numero1 / numero2)
    break
    case "4":
        alert(numero1 * numero2)
    break
    default:
        alert("Algo de errado não está certo!")
}
