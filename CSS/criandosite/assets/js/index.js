function entrar() {
    // Obtenha os valores dos campos
    let username = document.getElementById("usuario").value;
    let password = document.getElementById("senha").value;
  
    // Verificar se os campos estão preenchidos
    if (!username || !password) {
      let errorDiv = document.getElementById("msgError");
      errorDiv.innerHTML = "Por favor, preencha todos os campos.";
      return;
    }
  
    // Verificar se já existe algum usuário cadastrado no localStorage
    let usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    // Verificar se as credenciais estão corretas
    let credenciaisValidas = usuariosCadastrados.some(function(usuario) {
      return usuario.email == username && usuario.senha == password;
    });
 
    if (credenciaisValidas) {
      // Redirecionar para a próxima tela
      window.location.href = "assets/html/logo.html";
    } else {
      // Exibir uma mensagem de erro
      let errorDiv = document.getElementById("msgError");
      errorDiv.innerHTML = "Credenciais inválidas. Tente novamente.";
    }
  }
  