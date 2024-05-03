let nomes = []
let opcao = -5

while (opcao != 0) {
    opcao = prompt(`======== MENU ========
    1- Cadastrar nome
    2- Excluir um nome
    3- Editar um nome
    4- Pesquisar se um nome está cadastrado
    5- Listar todos os nomes cadastrados em ordem alfabética
    0- Sair do programa
    `)
    switch(opcao){
        case '1':
            nomes.push(prompt("Cadastre um nome: "))
            break
        case '2':
            nomes.pop()
            break
        case '4':
            if(nomes.includes(prompt("Nome existe?"))){
                alert("O nome está na lista!")
            }else{
                alert("O nome não está na lista!")
            }
            break
        case '5':
            alert(nomes.sort())
            break
        case 0:
            alert("Sair")
            break

    }
}