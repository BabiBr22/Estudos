let numeros1 = [];
let numeros2 = [];

// Pedir ao usuário para digitar 10 números e armazená-los no primeiro array
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i+1}º número:`));
    numeros1.push(numero);
}

// Copiar apenas os números ímpares do primeiro array para o segundo array
for (let numero of numeros1) {
    if (numero % 2 !== 0) {
        numeros2.push(numero);
    }
}

// Exibir os resultados
console.log("Array original:", numeros1);
console.log("Array com números ímpares:", numeros2);