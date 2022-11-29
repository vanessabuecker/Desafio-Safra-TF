import { register } from '../../lib/auth.js';


export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-register">
      <div class="logo">
          <img id="logo-safra" src="../src/img/logo.png">
      </div>
  
      <form class='container-inputs-register'>
          <input class='inputs' type='text' name='profile-name' id='input-profile-name'>
          <label for='text-name' class='text-inputs'>Nome</label>
          <input class='inputs' type='email' name='email' id='input-email-registration' required>
          <label for='text-email' class='text-inputs'>E-mail</label>
          <input class='inputs' type='password' id='password'>
          <label for='text-password' class='text-inputs'>Senha</label>
      </form>
      <div class="button-register"> <a href="#home"> <button type='button' class='btn-enter' id='btn-enter'>Cadastrar</button>
      </div>
      <div class="teste"> <a id='forgot-password' href='#login'>Já possui cadastro? <br> Faça seu login</a> </div> 
     `;
  
    container.innerHTML = template;

    const nameProfile = container.querySelector('#input-profile-name');
    const email = container.querySelector('#input-email-registration');
    const password = container.querySelector('#password');
    const btnRegistration = container.querySelector('#btn-enter');

  
    btnRegistration.addEventListener('submit', (e) => {
      e.preventDefault();
      if (nameProfile.value !== ''|| email.value !== '' || password.value !== '') {
        register(nameProfile.value, email.value, password.value)
          .then(() => {
            window.location.hash = 'home';
          });
      }
    });
      
  
    return container;
  };