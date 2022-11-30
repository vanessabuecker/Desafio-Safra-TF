export default () => {
  const container = document.createElement('div');
  const template = `
    <div id="container-credentials">
      <div class="header-credentials">
        <img class="logo-safra" src="../src/img/logo-home.png" alt="Logo Safra">
        <p class="user-name">Olá, </p>
      </div>
      <div class="instruction-title">
        <a href="#selectBank"><img id="arrow-icon" src="../src/img/arrow.png" alt="Ícone - seta para a esquerda"/></a>
      </div>
      <div id="form-credentials"
        <form>
          <p class="titles">Inserir Credenciais</p>
          <select id="options-credentials">
            <option disabled selected>Selecione:</option>
            <option value="">Opção 1</option>
            <option value="">Opção 2</option>
            <option value="">Opção 3</option>
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
          <a href="#home"><button id="credentials-ok-conect" class="btns">Vincular Banco</button></a>
        </form>
      </div>
    </div>`;

  container.innerHTML = template;

  const linkBank = container.querySelector('#credentials-ok-conect');
  const cpfCredentials = container.querySelector('#cpf-credentials');
  const passwordCredentials = container.querySelector('#pswrd-credentials');
  const divErro = container.querySelector('.div-error');

  linkBank.addEventListener('click', () => {
    if(cpfCredentials.value === '' || passwordCredentials.value === '') {
      divErro.innerHTML = 'Por favor, preencha todos os campos.'
    } else {
      window.location.hash = '#home'
    }
  });

  return container;
};