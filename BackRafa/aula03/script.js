// function testar(){
//     alert("Seja bem vindo")
// }

let usuario = document.getElementById("inpUsuario")
let senha = document.getElementById("inpSenha")
// console.log(usuario.value)
// console.log(senha.value)

function efetuarLogin() {
    console.log(usuario.value)
    console.log(senha.value)
    if(usuario.value == "Bárbara" && senha.value == "1234b"){
       alert("Seja bem vindo!") 
    }else{
        alert("Usuário ou senha incorretos!")
    }
    usuario.value = ''
    senha.value = ''
    usuario.focus()
}