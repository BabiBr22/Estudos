// 1) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode
// montar seu sorvete com até 3 bolas (sabores).
// Criar um programa que simule esse sistema:
// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// == MENSAGENS e VALIDAÇÕES ==
// 1 -&gt; Sabor adicionado! OU Limite de sabores atingido, remova um sabor!
// 2 -&gt; Sabor removido! OU Não existem sabores adicionados!
// 3 -&gt; Camada 1 - Sabor X, Camada 2 - Sabor Y, etc. OU Seu sorvete não possui
// sabores!
// 4 -&gt; Pedido realizado! OU Adicione pelo menos um sabor!

let sabores = [];
let opcao = -1;

while (opcao !== '0') {
    opcao = prompt(`===== SISTEMA DE SORVETERIA =====
    1- Adicionar sabor
    2- Remover sabor
    3- Visualizar sorvete
    4- Finalizar pedido
    0- Sair do programa`);

    switch(opcao){
        case '1':
            if (sabores.length < 3) {
                sabores.push(prompt("Adicione um sabor:"));
                alert("Sabor adicionado!");
            } else {
                alert("Limite de sabores atingido, remova um sabor!");
            }
            break;
        case '2':
            if (sabores.length > 0) {
                sabores.pop();
                alert("Sabor removido!");
            } else {
                alert("Não existem sabores adicionados!");
            }
            break;
        case '3':
            if (sabores.length > 0) {
                let sorvete = "";
                sabores.forEach((sabor, index) => {
                    sorvete += (`Camada ${index + 1} - ${sabor}\n`);
                });
                alert(sorvete);
            } else {
                alert("Seu sorvete não possui sabores!");
            }
            break;
        case '4':
            if (sabores.length > 0) {
                let sorvete = "";
                sabores.forEach((sabor, index) => {
                    sorvete += (`Camada ${index + 1} - ${sabor}\n`);
                });
                alert(`Pedido realizado!\n${sorvete}`);
            } else {
                alert("Adicione pelo menos um sabor!");
            }
            break;
        case '0':
            alert("Sair do programa");
            break;
        default:
            alert("Opção inválida!");
    }
}