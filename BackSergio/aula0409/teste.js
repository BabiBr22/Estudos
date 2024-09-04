let texto, letra, novo;

texto = 'A musa do verão, calor no coração';

letra = 'r';

// Exibe o caractere na posição 23 da string 'texto' no console.
console.log(texto.charAt(23)); 
// charAt(23) retorna 'r', pois 'texto' tem o caractere 'r' na posição 23.

// Loop que percorre cada caractere da string 'texto'.
for (let i = 0; i < texto.length; i++) {
    // Verifica se o caractere atual é igual a 'r'.
    if (texto[i] == 'r') {
        // Exibe o índice onde o caractere 'r' é encontrado no console.
        console.log(i);
    }
}

// Substitui a substring "A musa" por "O muso" na string 'texto' e armazena o resultado em 'novo'.
novo = texto.replace("A musa", "O muso");

console.log(novo);

// Verifica se a nova string contém o caractere 'y' e exibe o resultado no console.
// No caso, 'y' não está presente, então retornará 'false'.
console.log(novo.includes('y'));

// Exibe o índice da primeira ocorrência do caractere 'r' na nova string.
// Se 'r' não estiver presente, retornará -1.
console.log(novo.indexOf('r'));

// Exibe o índice da última ocorrência do caractere 'r' na nova string.
// Se 'r' não estiver presente, retornará -1.
console.log(novo.lastIndexOf('r'));

// Junta a string original 'texto' com a string modificada 'novo' e exibe o resultado no console.
console.log(texto.concat(novo));

// Verifica se a string original 'texto' começa com "A musa" e exibe o resultado no console.
// Retornará 'true' se começar com "A musa", caso contrário 'false'.
console.log(texto.startsWith('A musa'));

// Extrai uma substring da string original 'texto' do índice 11 até o índice 30 (exclusivo) e exibe o resultado no console.
console.log(texto.substring(11, 30));
