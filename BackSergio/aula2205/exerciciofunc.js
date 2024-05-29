let numero1 = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite um outro número: ")) 
let escolha = Number(prompt("Digite a operação que deseja: \n 1-soma, 2-subtração, 3-multiplicação e 4-divisão"))

function soma(){
    return numero1 + numero2
}

function subtracao(){
    return numero1 - numero2
}

function multiplica(){
    return numero1 * numero2
}

function divisao(){
    return numero1 / numero2
}

switch(escolha){
    case 1:
        alert(soma())
    break
    case 1:
        alert(subtracao())
    break
    case 1:
        alert(multiplica())
    break
    case 1:
        alert(divisao())
    break
    default:

}
