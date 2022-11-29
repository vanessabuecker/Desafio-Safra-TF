import { createDoc } from '../../lib/firestore.js';

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
          <p class="titles">Insira suas informações bancárias</p>

          <fieldset class="field">
            <legend>Instituição Financeira</legend>
            <input type="text" id="bank" class="infos-bank"/>
          </fieldset>

          <fieldset class="field">
            <legend>Tipo de Conta</legend>
            <input type="text" id="account" class="infos-bank"/>
          </fieldset>

          <fieldset class="field">
            <legend>Saldo Atual</legend>
            <input type="text" id="balance" class="infos-bank"/>
          </fieldset>

          <a href="#home"><button id="credentials-ok-link" class="btns">Vincular</button></a>
        </form>
        <p class="div-error"> </p>

      </div>
    </div>`;

  container.innerHTML = template;

  const linkBank = container.querySelector('#credentials-ok-link')
  const bank = container.querySelector('#bank')
  const account = container.querySelector('#account')
  const balance = container.querySelector('#balance')

  linkBank.addEventListener('click', () => {
    if (bank.value === '' || account.value === '' || balance.value === '') {
      divErro.innerHTML= "Por favor, preencha todos os campos."
    }else{
      console.log(createDoc(bank.value, account.value, balance.value))
    }
  })

  return container;
};