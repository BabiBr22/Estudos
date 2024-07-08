var palavra = "Digite, uma palavra"

var pala = palavra.split('').reverse().join('').replace(',').replace(' ')




function reverso(){
    if(pala == palavra){
        return true
    }
    else{
        return false
    }
}

console.log(reverso() + pala)