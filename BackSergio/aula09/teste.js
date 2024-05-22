// function saudacao(nome){
//     console.log("Olá, " + nome)
// }

// saudacao("Fulano")

//---------------------


// let saudacao = function(nome){
//     console.log("Olá" + nome)
// }

// saudacao("Maria")

let lista = ["Maria", "Marta", "Maisa", "Milena", "Marcio"]

let ehMult5 = lista.every(function(itens){
    return itens.charAt(0) == "M"
})

if(ehMult5){
    console.log("Todos os nomes comçam com M")
}else{
    console.log("Nem todos os nomes começam com M")
}

