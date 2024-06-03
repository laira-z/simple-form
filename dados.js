document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("fname").value;
  let sobrenome = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("phone").value;

  const dadosDoFormulario = new DadosFormulario(
    nome,
    sobrenome,
    email,
    telefone
  );

  const divDadosFormuario = document.querySelector("#dados-formulario");

  divDadosFormuario.innerHTML = `
    <p>Nome: ${dadosDoFormulario.nome}</p>
    <p>Sobrenome: ${dadosDoFormulario.sobrenome}</p>
    <p>Email: ${dadosDoFormulario.email}</p>
    <p>Telefone: ${dadosDoFormulario.telefone}</p>
`;
});

document.getElementById("limpar").addEventListener("click", function () {
  const campos = document.querySelectorAll(
    "#formlogin input[type='text'], #formlogin input[type='email'], #formlogin input[type='tel']"
  );
  campos.forEach((campo) => (campo.value = ""));
});

// Adiciona validadores personalizados aos campos
document.getElementById("fname").addEventListener("input", function () {
  const campo = this;
  if (campo.validity.patternMismatch) {
    campo.setCustomValidity(
      "Por favor, insira um nome válido (apenas letras são permitidas)."
    );
  } else {
    campo.setCustomValidity("");
  }
});

document.getElementById("lname").addEventListener("input", function () {
  const campo = this;
  if (campo.validity.patternMismatch) {
    campo.setCustomValidity(
      "Por favor, insira um sobrenome válido (apenas letras são permitidas)."
    );
  } else {
    campo.setCustomValidity("");
  }
});

document.getElementById("email").addEventListener("input", function () {
  const campo = this;
  if (campo.validity.patternMismatch) {
    campo.setCustomValidity("Por favor, insira um email válido.");
  } else {
    campo.setCustomValidity("");
  }
});

document.getElementById("phone").addEventListener("input", function () {
  const campo = this;
  if (campo.validity.patternMismatch) {
    campo.setCustomValidity(
      "Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX."
    );
  } else {
    campo.setCustomValidity("");
  }
});

class DadosFormulario {
  constructor(nome, sobrenome, email, telefone) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.telefone = telefone;
  }
}
