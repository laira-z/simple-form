document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("fname").value;
  let sobrenome = document.getElementById("lname").value;
  let email = document.getElementById("email").value;

  const dadosDoFormulario = new DadosFormulario(nome, sobrenome, email);

  const divDadosFormuario = document.querySelector("#dados-formulario");

  divDadosFormuario.innerHTML = `
    <p>Nome: $(dadosDoFormulario.nome)</p>
    <p>Sobrenome: $(dadosDoFormulario.sobrenome)</p>
    <p>Email: $(dadosDoFormulario.email)</p>
`;
});

document.getElementById("limpar").addEventListener("click", function () {
  const campos = document.querySelectorAll(
    "#formlogin input[type='text'], #formlogin input[type='email'], #formlogin[type='radio']"
  );
  campos.forEach((campo) => (campo.value = ""));
});

class DadosFormulario {
  constructor(nome, sobrenome, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
  }
}
