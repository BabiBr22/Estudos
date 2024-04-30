let soma, resist2 = []

for(i = 0; resist2[i]; i++){
    resist2.push(parseInt(prompt("Digite um valor ou 0 para sair: ")))
}



let acumula, resist = []
for(n = 0; resist[n-1] !=0; n++){
    resist.push(parseInt(prompt("Digite um valor ou 0 para sair: ")))
}
for(let i = 0; i < resist.length - 2; i++){
    i==0 ? acumula = ((resist[i] * resist[i + 1]) / (resist[i] + resist[i + 1] )) : acumula = ((acumula * resist[i + 1]) / (acumula + resist[i + 1] ))
}
alert(`${resist.pop()} valor da resistencia equivalente é:  ${resist} = ${acumula.toFixed(1)}Ω`)
