import { logout } from "../../lib/auth.js";

export default () => {
  const container = document.createElement('div');
  const template = `
    <div id="container-credentials">
    <div class="retangle-home">
    <div class="logo-home">
        <img id="logo-safra-home" href='#home' src="./img/logo-home.png" alt="Logo Safra"> <span class="userName">Olá,
            Sabrina!</span>
    </div>
      <div class="instruction-title">
        <a href="#openFinance"><img id="arrow-icon" src="../img/arrow.png" alt="Ícone - seta para a esquerda"/></a>
      </div>
      <div id="form-credentials">
      <form>
        <p class="titles">Inserir Credenciais</p>
        <select id="options-credentials">
          <option disabled selected>Selecione:</option>
          <option value="Cpf">CPF</option>
          <option value="Nº da conta">Nº da conta</option>
        </select><br>
        <fieldset class="field">
          <legend>CPF</legend>
          <input type="text" id="cpf-credentials" class="pswrd-cpf-credentials"/>
        </fieldset>
        <fieldset class="field">
          <legend>Senha</legend>
          <input type="password" id="pswrd-credentials" class="pswrd-cpf-credentials"/>
        </fieldset>
        <p class="div-error"> </p>
        <button id="credentials-ok-conect" class="btns">Vincular Banco</button>
    </form>
      </div>
      <div id="modal-ok-bank" class="hide">
        <p>instituição vinculada com sucesso!</p>
        <button id="link-ok">OK</button>
      </div>
      <div class="retangle-bottom-home">
          <div class="content-bottom-retangle">
            <a href="#home">
              <img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME">
            </a>  
          <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">
        </div>
      </div>
    </div>`;

    container.innerHTML = template;
  
    const linkBank = container.querySelector('#credentials-ok-conect');
    const modal = container.querySelector('#modal-ok-bank');
    const modalOkBtn = container.querySelector('#link-ok');
    
    linkBank.addEventListener('click', () => {
      modal.classList.toggle('hide');
    })
    
    modalOkBtn.addEventListener('click', () => {
      window.location.hash = '#home'
    })

    const btnLogout = container.querySelector('#icon-logout');

    btnLogout.addEventListener('click', (e) => {
      const main = document.querySelector('#root');
      e.preventDefault();
      logout().then(() => {
        window.location.hash = '';
      });
    });
  

  return container;
};