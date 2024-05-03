let alunos = [];
let notasAcimaCinco = [];

// Pedir ao usuário para digitar os nomes dos alunos e suas notas
for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do ${i+1}º aluno:`);
    let nota = parseFloat(prompt(`Digite a nota de Matemática do(a) aluno(a) ${nome}:`));
    
    alunos.push({nome: nome, nota: nota});
    
    if (nota > 5.0) {
        notasAcimaCinco.push(nota);
    }
}

// Calcular a média das notas acima de 5.0
let media = 0;
if (notasAcimaCinco.length > 0) {
    let somaNotas = notasAcimaCinco.reduce((total, nota) => total + nota, 0);
    media = somaNotas / notasAcimaCinco.length;
}

// Exibir os resultados
console.log("Alunos e suas notas:", alunos);
console.log("Média das notas acima de 5.0:", media);