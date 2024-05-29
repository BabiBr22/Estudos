// function calculaAreaTerreno(largura, profundidade){
//     let areaTotal = largura * profundidade
//     return areaTotal
// }

// let medidaMansao = calculaAreaTerreno(100, 100)
// let medidaPadrao = calculaAreaTerreno(50, 40)
// let medidaSobrado = calculaAreaTerreno(30, 40)
// let medidaComercial = calculaAreaTerreno(40, 40)

// console.log(medidaMansao + "m²")
// console.log(medidaPadrao + "m²")
// console.log(medidaSobrado + "m²")
// console.log(medidaComercial + "m²")

// -------------------------------------

// let saudacao = function(nome){
//     console.log("Boa tarde, " + nome)
// }

// saudacao("Bárbara linda")


// ------------------------------------

// let lista = [32, 68, 12, 44]

// let verificaPares = lista.every(function(itens){
//     return itens % 2 == 0
// })

// verificaPares ? console.log("Todos são pares") : console.log("Nem todos são pares")

// --------------------------------------

// let  saudacao = nome => {
//     console.log("Olá, " + nome)
// }

// saudacao("Bárbara")

// --------------------------------------

// let saudacao = () => console.log("Olá a todos")
// saudacao()

// ---------------------------------

let lista = [30, 25, 15, 17, 26, 50]

let mapDaLista = lista.map(function (valorAtual){
    return valorAtual / 2
})

console.log(mapDaLista.toString())