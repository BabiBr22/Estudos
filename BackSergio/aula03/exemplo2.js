let nome = "", acumulador = "";

while(nome != "pare"){
    nome = prompt("Digite um nome ou 'pare' para sair ")
    if(nome != "pare"){
        acumulador += nome + ", "
    }
    let ultimo = acumulador.lastIndexOf(", ")
}

alert(acumulador)