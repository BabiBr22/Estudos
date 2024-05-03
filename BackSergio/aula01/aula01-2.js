let n1 = parseInt(prompt('Digite a primeira nota: '))
let n2 = parseInt(prompt('Digite a segunda nota: '))
let n3 = parseInt(prompt('Digite a terceira nota: '))

let media = (n1 + n2 + n3) / 3

if(media >= 7){
    alert(`${media.toFixed(1)} - Aprovado!`)
}else if(media < 7 && media > 3){
    alert(`${media.toFixed(1)} - Recuperação!`)
}else{
    alert(`${media.toFixed(1)} - Reprovado!`)
}


