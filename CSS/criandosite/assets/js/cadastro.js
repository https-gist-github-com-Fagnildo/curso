document.getElementById("cadastroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Obtenha os valores dos campos
  let nome = document.getElementById("cadastroNome").value;
  let endereco = document.getElementById("cadastroEndereco").value;
  let email = document.getElementById("cadastroEmail").value;
  let telefone = document.getElementById("cadastroTelefone").value;
  let senha = document.getElementById("cadastroSenha").value;
  let confirmaSenha = document.getElementById("cadastroConfirmaSenha").value;
  

  // Validação dos campos
  if (nome.trim() === "") {
    marcarCampoInvalido("cadastroNome");
    return;
  }

  if (endereco.trim() === "") {
    marcarCampoInvalido("cadastroEndereco");
    return;
  }

  if (email.trim() === "" || !validarEmail(email)) {
    marcarCampoInvalido("cadastroEmail");
    return;
  }

  if (telefone.trim() === "") {
    marcarCampoInvalido("cadastroTelefone");
    return;
  }

  if (senha.trim() === "") {
    marcarCampoInvalido("cadastroSenha");
    return;
  }

  if (confirmaSenha.trim() === "" || confirmaSenha !== senha) {
    marcarCampoInvalido("cadastroConfirmaSenha");
    return;
  }

  // Verificar se já existe algum usuário cadastrado no localStorage
  let usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar se o email já está cadastrado
  let usuarioExistente = usuariosCadastrados.find(function(usuario) {
    return usuario.email === email;
  });

  if (usuarioExistente) {
    alert("O email informado já está cadastrado. Por favor, utilize outro email.");
    return;
  }

  // Criar objeto de usuário
  let usuario = {
    nome: nome,
    endereco: endereco,
    email: email,
    telefone: telefone,
    senha: senha
  };

  // Adicionar novo usuário à lista de usuários cadastrados
  usuariosCadastrados.push(usuario);

  // Salvar a lista atualizada de usuários no LocalStorage
  localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

  // Se todas as validações passarem, exiba uma mensagem de sucesso e redirecione para a página de login
  alert("Cadastro realizado com sucesso!");
  window.location.href = "../../index.html";
});

// Função para marcar um campo como inválido
function marcarCampoInvalido(campoId) {
  let campo = document.getElementById(campoId);
  campo.classList.add("campo-invalido");
  campo.addEventListener("input", limparCampoInvalido);
}

// Função para limpar a marcação de campo inválido
function limparCampoInvalido(e) {
  e.target.classList.remove("campo-invalido");
}

// Função para validar o formato do email
function validarEmail(email) {
  let re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}
