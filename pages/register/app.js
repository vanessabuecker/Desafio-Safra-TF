import { register } from "../../lib/auth.js";
import { createCollectionDataUser } from "../../lib/firestore.js";

export default () => {
  const container = document.createElement("div");
  const template = `  <div class="container-register">
      <div class="logo">
          <img id="logo-safra" src="../../img/logo.png">
      </div>
  
      <form class='container-inputs-register'>
          <input class='inputs' type='text' name='profile-name' id='input-profile-name'>
          <label for='text-name' class='text-inputs'>Nome</label>
          <input class='inputs' type='number' name='cpf' id='input-cpf'>
          <label for='text-name' class='text-inputs'>CPF</label>
          <input class='inputs' type='number' name='profile-name' id='input-balance'>
          <label for='text-name' class='text-inputs'>Valor do saldo </label>
          <input class='inputs' type='email' name='email' id='input-email-registration' required>
          <label for='text-email' class='text-inputs'>E-mail</label>
          <input class='inputs' type='password' id='password'>
          <label for='text-password' class='text-inputs'>Senha</label>
      </form>
      <p class="div-error"> </p>

      <div class="button-register">
      <button type='button' class='btn-enter' id='btn-enter'>Cadastrar</button>
      </div>

      <div class="teste"> <a id='forgot-password' href='#login'>Já possui cadastro? <br> Faça seu login</a> </div> 
     `;

  container.innerHTML = template;

  const nameProfile = container.querySelector("#input-profile-name");
  const email = container.querySelector("#input-email-registration");
  const password = container.querySelector("#password");
  const btnRegistration = container.querySelector("#btn-enter");
  const cpf = container.querySelector("#input-cpf");
  const balance = container.querySelector("#input-balance");

  const divErro = container.querySelector(".div-error");

  btnRegistration.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      nameProfile.value === "" ||
      email.value === "" ||
      password.value === ""
    ) {
      divErro.innerHTML = "Por favor, preencha todos os campos.";
    } else {
      register(email.value, password.value, nameProfile.value);
      createCollectionDataUser(email.value, cpf.value, balance.value)
        .then(() => {
          window.location.hash = '#home'
        })
        .catch((error) => {
          error.code;
        });
    }
  });

  return container;
};
