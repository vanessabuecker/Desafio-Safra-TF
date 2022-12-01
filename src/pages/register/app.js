import { register } from "../../lib/auth.js";

import {
  errorsFirebase,
  validateRegister
} from "../../validations.js";

import { redirect } from "../../redirect.js";

export default () => {
  const container = document.createElement("div");
  const template = `  <div class="container-register">
      <div class="logo">
          <img id="logo-safra" src="../img/logo.png">
      </div>
  
      <form class='container-inputs-register'>
          <input class='inputs' type='text' name='profile-name' id='input-profile-name'>
          <label for='text-name' class='text-inputs'>Nome</label>
          <input class='inputs' type='text' name='last-name' id='input-last-name'>
          <label for='text-name' class='text-inputs'>Sobrenome</label>
          <input class='inputs' id='input-cpf' placeholder="000.000.00-00"/>
          <label for='text-name' class='text-inputs'>CPF</label>
          <input class='inputs' type='number' name='profile-name' id='input-balance'>
          <label for='text-name' class='text-inputs'>Valor do saldo </label>
          <input class='inputs' type='email' name='email' id='input-email-registration' required>
          <label for='text-email' class='text-inputs'>E-mail</label>
          <input class='inputs' type='password' id='password'>
          <label for='text-password' class='text-inputs'>Senha</label>
          <input class='inputs' type='password' id='repeat-password'>
          <label for='text-password' class='text-inputs'>Confirme a sua senha</label>
      </form>
      <p class="div-error"> </p>

      <div class="button-register">
      <button type='button' class='btn-enter' id='btn-enter'>Cadastrar</button>
      </div>

      <div class="class='text-href'">
      <a id='forgot-password' href='#login'>Já possui cadastro? Faça seu login</a>
      </div> 
     `;

  container.innerHTML = template;

  const name = container.querySelector("#input-profile-name");
  const lastName = container.querySelector("#input-last-name")
  const email = container.querySelector("#input-email-registration");
  const password = container.querySelector("#password");
  const passwordRepeat = container.querySelector("#repeat-password")
  const btnRegistration = container.querySelector("#btn-enter");
  const cpf = container.querySelector("#input-cpf");
  const balance = container.querySelector("#input-balance");
  const errorMessage = container.querySelector(".div-error");

  btnRegistration.addEventListener('click', (event) => {
    event.preventDefault();
    const validation = validateRegister(
      name.value,
      lastName.value,
      cpf.value,
      balance.value,
      email.value,
      password.value,
      passwordRepeat.value,
    );
    if (validation === '') {
      register(email.value, password.value, name.value)
        .then(() => {
          redirect('#home')
        })
        .catch((error) => {
          const errorFirebase = errorsFirebase(error.code);
          errorMessage.innerHTML = errorFirebase;
        });
    } else {
      errorMessage.innerHTML = validation;
    }
  });

  return container;
};
