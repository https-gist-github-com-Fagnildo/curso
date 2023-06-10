if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar esta página')
    window.location.href="./assets/html/signin.html";
}
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')
logado.innerHTML = `Bem Vindo Ao Jogo ${userLogado.nome}`

function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href="./assets/html/signin.html";
  
}