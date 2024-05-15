// let alunos = [[], [], []]

// alunos[0][0] = "Ana"
// alunos[0][1] = "50"
// alunos[1][0] = "Fabio"
// alunos[1][1] = "25"
// alunos[2][0] = "Fullano"
// alunos[0][2] = "32"

// for(let elementos of alunos){
//     console.log(elementos.toString())
// }

// --------------------

// let alunos = new Array(3);

// for(let i = 0; i < alunos.length; i++){
//     alunos[i] = new Array(2);
// }

// for(let i = 0; i < alunos.length; i++){
//     for(let j = 0 ; j < alunos[i].length; j++){
//         alunos[i][j] = prompt("Digite o nome do aluno: ")
//     }
// }

// alert(alunos)


// -----------------------


let botao, quebraLinha, jogada = 1;

let tabuleiro = new Array(3);

for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3);
}

for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br');
    document.body.append(quebraLinha);
    for(let j = 0; j < tabuleiro[i].length; j++){
        botao = document.createElement('button');
        botao.setAttribute('type', 'button');
        botao.setAttribute('id', 'bt' + i + "" + j);
        botao.setAttribute('class' , 'btJogo' + i);
        botao.setAttribute('onclick', 'marca(' + i + "," + j + ')');
        botao.append(document.createTextNode(""));
        document.body.append(botao);
    }
}

function marca00(linha, coluna){
    marcarCasa("bt" + linha + "" + coluna);
}


function marcarCasa(nomeBotao){
    if(jogada % 2 === 0){
        document.getElementById(nomeBotao).innerText = "O";
    } else {
        document.getElementById(nomeBotao).innerText = "X";
    }
    document.getElementById(nomeBotao).disabled = true;
    jogada++;
}
