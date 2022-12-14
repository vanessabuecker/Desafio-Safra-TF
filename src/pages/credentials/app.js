export default () => {
  const container = document.createElement('div');
  const template = `
    <div id="container-credentials">
      <div class="header-credentials">
        <img class="logo-safra" src="./img/logo-home.png" alt="Logo Safra">
        <p class="user-name">Olá, Vanessa!</p>
      </div>
      <div class="title-container">
            <a href="#selectBank">
                <img id="arrow-icon" src="./img/arrow.png" alt="Ícone - seta para a esquerda">
            </a>
            <p class="title-text"> Insira suas credenciais</p> 
        </div>

      </div>
      <div id="form-credentials"
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

  return container;
};