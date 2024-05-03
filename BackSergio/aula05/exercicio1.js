//Atividade 01

let produtos = ["caneta","borracha","lápis","caderno", "régua"]
let precos = [25.5,52.3,71.8,119.9,134.2]
let qtdProdutosMenosDe50 = 0
let produtosEntre50e100 = ""
let mediaMaiores100 = 0
let soma = 0
let qtdMaior100 = 0
// for(let i = 0; i < 5; i++){
//     produtos[i] = prompt("Digite um produto")
//     precos[i] = Number(prompt("Digite o preço"))
// }
for(let i = 0; i < precos.length; i++){
    if(precos[i] < 50.0){
        qtdProdutosMenosDe50++  
    }
    if(precos[i] > 50 && precos[i] < 100){
        produtosEntre50e100 += produtos[i] + " "
    }
    if(precos[i] > 100){
        soma += precos[i]
        qtdMaior100++
    }
    mediaMaiores100 = soma / qtdMaior100
}
console.log(qtdProdutosMenosDe50)
console.log(produtosEntre50e100)
console.log(mediaMaiores100)
