// let user, pass, result

// function verificaLogin() {
//     user = document.getElementById('usuario').value
//     pass = document.getElementById('senha').value
//     result = (user == "barbara" && pass == "1234") ? "Acesso Concedido" : "Acesso Negado"
//     document.getElementById("msg").innerHTML = result + ", " + user
// }




// let numero = prompt("Digite um número qualquer?: ")

// let resultado = numero % 2 == 0 ? alert("O número é par"): alert("O número é ímpar")

let n1, n2, n3, media
n1 = Number(prompt("Digite sua nota: "))
n2 = Number(prompt("Digite a segunda nota: "))
n3 = Number(prompt("Digite a terceira nota: "))

media = (n1 + n2 + n3) / 3

resultado = media >= 7 ? "Aprovado" : media < 3 ? "Reprovado" : "Recuperação"

alert(`${resultado} - Média Final: ${media}`)