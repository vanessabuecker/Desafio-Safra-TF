import { login } from '../../lib/auth.js'

import {
    errorsFirebase,
    validateLogin
} from '../../validations.js'

import { redirect } from '../../redirect.js';

export default () => {
  const container = document.createElement("div");
  const template = `
    <div class="container-login">
        <div class="logo">
            <img id="logo-safra" src="../../img/logo.png">
        </div>
    
        <form class='container-inputs-login'>
            <input class='inputs' id='input-id' placeholder="000.000.00-00"/>
            <label for='text-id' class='text-inputs'>CPF/CNPJ</label>
            <input class='inputs' type='email' id='input-email-login' placeholder="exemple@email.com"/>
            <label for='text-id' class='text-inputs'>Email</label>
            <input class='inputs' type='password' id='input-password' />
            <label for='text-password' class='text-inputs'>Senha</label>
        </form>
        <p class="div-error"> </p>

        <div class="button-login"> <a href="#home">
            <button type='button'  class='btn-enter' id='btn-enter'>Entrar</button>
        </div>
        
        <div class="teste">
            <a class='text-href' id='btn-forgot-password' href='#NAOSEI'>Esqueci a senha</a>
        </div>
        
        <div class="teste">
            <a class='text-href'id='btn-cadastro'href='#register'>Cadastre-se</a>
        </div>
    </div> 
   `;

  container.innerHTML = template;

  const cpf = container.querySelector("#input-id");
  const email = container.querySelector("#input-email-login");
  const password = container.querySelector("#input-password");
  const btnEnter = container.querySelector("#btn-enter");
  const errorMessage = container.querySelector(".div-error");

  btnEnter.addEventListener('click', (event) => {
    event.preventDefault();
    const validation = validateLogin(email.value, password.value, cpf.value);
    if (validation === '') {
      login(email.value, password.value)
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
