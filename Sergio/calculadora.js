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


let tabuleiro = new Array(3)
let botao, quebralinha, jogada = 1

for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(3)
}

for (let i = 0; i < tabuleiro.length; i++) {
    quebralinha = document.createElement('br')
    document.body.append(quebralinha);
    for (let j = 0; j < tabuleiro[i].length; j++) {
        botao = document.createElement('button')
        botao.setAttribute('type', 'button')
        botao.setAttribute('id', 'bt' + i + "" + j)
        botao.setAttribute('class', 'btJogo' + i)
        botao.setAttribute('onclick', 'marca(' + i + "," + j + ")")
        botao.append(document.createTextNode(""))
        document.body.append(botao);
    }
}

function marca(linha, coluna) {
    marcarCasa("bt" + linha + "" + coluna)

}


function marcarCasa(nomeBotao) {
    if (jogada % 2 == 0) {
        document.getElementById(nomeBotao).innerText = "O"
        document.getElementById(nomeBotao).style.color = "blue";
    } else {
        document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "black";
    }
    document.getElementById(nomeBotao).disabled = true
    jogada++
    if (jogada >= 5) {
        encerraJogo()
    }
}

function encerraJogo() {
    
        if (document.getElementById("bt00").innerText ==
        document.getElementById("bt01").innerText &&
        document.getElementById("bt01").innerText ==
        document.getElementById("bt02").innerText &&
        document.getElementById("bt00").innerText != "") {
        alert("Jogo Finalizado\n Vencedor: " + document.getElementById("bt00").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt0" + cont).style.color = "#FF0000"
        }
    }
    if (document.getElementById("bt10").innerText ==
        document.getElementById("bt11").innerText &&
        document.getElementById("bt11").innerText ==
        document.getElementById("bt12").innerText &&
        document.getElementById("bt10").innerText != "") {
        alert("Jogo Finalizado\n Vencedor: " + document.getElementById("bt10").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt1" + cont).style.color = "#FF0000"
        }
    }
    if (document.getElementById("bt20").innerText ==
        document.getElementById("bt21").innerText &&
        document.getElementById("bt21").innerText ==
        document.getElementById("bt22").innerText &&
        document.getElementById("bt20").innerText != "") {
        alert("Jogo Finalizado\n Vencedor: " + document.getElementById("bt20").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt2" + cont).style.color = "#FF0000"
        }
    }
    if (document.getElementById("bt00").innerText ==
        document.getElementById("bt10").innerText &&
        document.getElementById("bt10").innerText ==
        document.getElementById("bt20").innerText &&
        document.getElementById("bt00").innerText != "") {
        alert("Jogo Finalizado\n Vencedor: " + document.getElementById("bt00").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt" + cont + "0").style.color = "#FF0000"
        }
    }
    if (document.getElementById("bt01").innerText ==
        document.getElementById("bt11").innerText &&
        document.getElementById("bt11").innerText ==
        document.getElementById("bt21").innerText &&
        document.getElementById("bt01").innerText != "") {
        alert("Jogo Finalizado\n Vencedor: " + document.getElementById("bt01").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt" + cont + "1").style.color = "#FF0000"
        }
    }
    if (document.getElementById("bt02").innerText ==
        document.getElementById("bt12").innerText &&
        document.getElementById("bt12").innerText ==
        document.getElementById("bt22").innerText &&
        document.getElementById("bt02").innerText != "") {
        alert("Jogo Finalizado\n Vencedor: " + document.getElementById("bt02").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt" + cont + "2").style.color = "#FF0000"
        }
    }
    if (document.getElementById("bt00").innerText ==
        document.getElementById("bt11").innerText &&
        document.getElementById("bt11").innerText ==
        document.getElementById("bt22").innerText &&
        document.getElementById("bt00").innerText != "") {
        alert("Jogo Finalizado\n Vencedor: " + document.getElementById("bt00").innerText)
        for(cont in tabuleiro){
            document.getElementById("bt" + cont + ""+ cont).style.color = "#FF0000"
        }
    }
    if (document.getElementById("bt02").innerText ==
        document.getElementById("bt11").innerText &&
        document.getElementById("bt11").innerText ==
        document.getElementById("bt20").innerText &&
        document.getElementById("bt02").innerText != "") {
        alert("Jogo Finalizado\n Vencedor: " + document.getElementById("bt02").innerText)
        let contRegressiva = tabuleiro.length -1
        for(cont in tabuleiro){
            document.getElementById("bt" + cont + "" + contRegressiva--).style.color = "#FF0000"
        }
    }
}
