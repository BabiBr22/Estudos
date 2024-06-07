let nomes = ["Bruna", "Babi"]
let nomeComp = nomes.length
let valor = true


function nome(){
    nomes.push("Barbara")

    if(nomes.length > nomeComp ){
        valor = true
        alert(valor)
    }else{
        valor = false
        alert(valor)
    }
}

nome()