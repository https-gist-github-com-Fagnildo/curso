let btn = document.querySelector('#versenha')
let btnconfirm = document.querySelector('#verconfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup' , () => {
 if(nome.value.length <=2){
   labelNome.setAttribute('style' , 'color: red')
   labelNome.innerHTML = ' nome *insira no minimo 3 caracteres'
   nome.setAttribute('style' , 'border-color: red')
   validNome = false
 } 
  else {
   labelNome.setAttribute('style', 'color: green')
      labelNome.innerHTML = 'nome'
    nome.setAttribute('style' , 'border-color: green')
    validNome = true
 }
})
usuario.addEventListener('keyup' , () => {
 if(usuario.value.length <= 4){
   labelUsuario.setAttribute('style' , 'color: red')
   labelUsuario.innerHTML = 'usuario *insira no minimo 5 caracteres'
   usuario.setAttribute('style' , 'border-color: red')
   validUsuario = false
 } 
  else {
   labelUsuario.setAttribute('style', 'color: green')
      labelUsuario.innerHTML = 'usuario'
    usuario.setAttribute('style' , 'border-color: green')
    validUsuario = true
 }
})
senha.addEventListener('keyup' , () => {
 if(senha.value.length <= 5){
   labelSenha.setAttribute('style' , 'color: red')
   labelSenha.innerHTML = 'senha *insira no minimo 6 caracteres'
   senha.setAttribute('style' , 'border-color: red')
   validSenha = false
 } 
  else {
   labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML = 'usuario'
    senha.setAttribute('style' , 'border-color: green')
    validSenha = true
 }
})
confirmSenha.addEventListener('keyup' , () => {
 if(senha.value != confirmSenha.value){ 
   labelConfirmSenha.setAttribute('style' , 'color: red')
   labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
   confirmSenha.setAttribute('style' , 'border-color: red')
   validConfirmSenha = false
 } 
  else {
   labelConfirmSenha.setAttribute('style', 'color: green')
   labelConfirmSenha.innerHTML = 'confirmar Senha'
   confirmSenha.setAttribute('style' , 'border-color: green')
    validConfirmSenha = true
 }
})


function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
   let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
   listaUser.push(
   {
     nomeCad: nome.value,
     userCad: usuario.value,
     senhaCad: senha.value
   })
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
    
    
    msgSucess.setAttribute('style', 'display: block')
     msgSucess.innerHTML = '<strong>Cadastrando  Usuario...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    setTimeout(()=>{
       window.location.href = "../html/signin.html";
      
    },2000);
    
  } else{
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha Todos Os Campos Corretamente Antes de Cadastrar.</strong>'
    msgSucess.innerHTML = ''
    msgSucess.setAttribute('style', 'display: none')
     
  }
  
}
btn.addEventListener('click', ()=>{
  let inputsenha = document.querySelector('#senha')
  
  if(inputsenha.getAttribute('type')== 'password'){
    inputsenha.setAttribute('type', 'text')
  } else{
    inputsenha.setAttribute('type','password')
  }
})

btnconfirm.addEventListener('click', ()=>{
  let inputconfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputconfirmSenha.getAttribute('type')== 'password'){
    inputconfirmSenha.setAttribute('type', 'text')
  } else{
    inputconfirmSenha.setAttribute('type','password')
  }
})
