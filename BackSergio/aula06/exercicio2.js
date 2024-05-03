// Pergunta ao usuário 3 números e os armazena em um array
let numeros = [];
for (let i = 0; i < 3; i++) {
    let numero = prompt(`Digite o ${i+1}º número:`);
    numeros.push(Number(numero));
}

// Exibe o array original
console.log("Array original:", numeros);

// Modifica os elementos do array para que a sequência fique reversa
numeros.reverse();

// Exibe o array com a sequência reversa
alert("Array com sequência reversa:" + numeros);