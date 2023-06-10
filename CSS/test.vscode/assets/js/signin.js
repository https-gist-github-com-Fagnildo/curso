let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputsenha = document.querySelector('#senha')
  
  if(inputsenha.getAttribute('type')== 'password'){
    inputsenha.setAttribute('type', 'text')
  } else{
    inputsenha.setAttribute('type','password')
  }
})
function entrar(){
 let usuario = document.querySelector('#usuario') 
 let userlabel = document.querySelector('#userlabel') 
 
 let senha = document.querySelector('#senha') 
 let senhalabel = document.querySelector('#senhalabel') 
 
 let msgError = document.querySelector('#msgError') 
 let listaUser = []
 
 let userValid = {
   nome:null,
   user:null,
   senha:null
 }
 listaUser = JSON.parse(localStorage.getItem('listaUser'))
  listaUser?.forEach((iten) => {
    if(usuario.value == iten.userCad && senha.value == iten.senhaCad){
      userValid = {
        nome: iten.nomeCad,
        user: iten.userCad,
        senha: iten.senhaCad
      }
    }
  })
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = '../../index.html'
    let token = Math.random().toString(16)
    localStorage.setItem('token', token)
    
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else{
    userlabel.setAttribute('style' , 'color: red')
    usuario.setAttribute('style' , 'border-color: red')
    senhalabel.setAttribute('style' , 'color: red')
    senha.setAttribute('style' , 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'usuário ou senha incorretos'
    usuario.focus()
  }
} 
