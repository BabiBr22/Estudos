
function verificarLogin(){
    let nomeUser = document.getElementById("login").value
    let senha = document.getElementById("senha").value
    if(nomeUser == 'admin' && senha == 123){
        alert('Login efetuado!')
    }else{
        alert('Login falhou!')
    }
}