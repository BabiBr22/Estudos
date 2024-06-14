const formulario = document.querySelector('#form');

const lista = []

for(let i = 0; i < formulario.length.value; i++){
    lista[i] = formulario
}

console.log(lista)


// formulario.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let nome = formulario.nome.value;
//   let senha = formulario.senha.value;
//   let email = formulario.email.value;
  
//   console.log(nome, senha, email);
//   let enviar = confirm("Deseja enviar o formulário?");
//   if (enviar) {
//     formulario.submit();    
//   }  
// });