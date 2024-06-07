let indice = Number(prompt("Digite um indice: "))
let array = ["barbara", "mae", "pai", "tia"]


function nseiOnome(){
    array.splice(indice, 1)

    for(let i = 0; i < array.length; i++){
        alert(array[i])
    }
}

nseiOnome()