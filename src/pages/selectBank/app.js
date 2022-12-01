import { addClientToInstitution } from '../../lib/firestore.js';
import { auth } from '../../lib/config_firebase.js';
import { logout } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  const template = `<div class="container-selectBank">
    <div class="retangle-home">
        <div class="logo-home">
            <img id="logo-safra-home" href='#home' src="./img/logo-home.png" alt="Logo Safra"> <span class="userName">Olá,
                Sabrina!</span>
        </div>
    <div class="title-container">
      <a href="#openFinance">
        <img class="arrow-icon-selectBank" src="./img/arrow.png" alt="Ícone - seta para a esquerda">
      </a>
      <p class="title-text"> Selecione o Banco</p> 
    </div> 
    <div class="banks-container">
      <div class="box-banks"> 
        <div class="app-item-one">           
          <img data-action="html" class="icon-bank" src="./img/icon-html.png">            
          <p>HTML Bank</p>
        </div>
        <div class="app-item-two">           
          <img data-action="js" class="icon-bank" src="./img/icon-java-script.png">           
          <p>JS Bank</p>
        </div>
        <div class="app-item-three">           
          <img data-action="css" class="icon-bank" src="./img/icon-css.png">           
          <p>CSS Bank</p>
          </div>        
          <div class="app-item-four">           
            <img data-action="lab" class="icon-bank" src="./img/icon-lab.png">            
            <p>LAB Bank</p>
          </div>       
          <div class="app-item-five">            
            <img data-action="git" class="icon-bank" src="./img/icon-github.png">           
            <p>GIT Bank</p>
          </div>    
          <div class="app-item-six">
            <img data-action="react" class="icon-bank" src="./img/icon-react.png">
            <p>REACT Bank</p>
          </div>
        </div>
      </div>
      <div class="container-more-selectBank">
        <div class="box-selectmore">
          <a href="#selectMoreBank">
          <img class="icon-more-selectBank" src="./img/icone-mais.png" alt="Ícone sinal de mais">  </div> 
          <p class="text-more"> Ver mais instituições</p>
          </a>
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

  const banksList = container.querySelector('.banks-container');
  banksList.addEventListener('click', async (event) => {
    event.preventDefault();
    const bankElement = event.target;
    const actions = bankElement.dataset.action;

    switch (actions) {
      case 'html':
        await addClientToInstitution(auth.currentUser.uid, 'RR7Ho0kISKnO7FjynmCY')
        window.location.hash = '#credentials'
        break;
      case 'js':
        await addClientToInstitution(auth.currentUser.uid, 'JHm8UToVaQRnqprXpzjA')
        window.location.hash = '#credentials'
        break;
      case 'css':
        await addClientToInstitution(auth.currentUser.uid, 'Djz0PRw214hWKOITRPaA')
        window.location.hash = '#credentials'
        break;
      case 'lab':
        await addClientToInstitution(auth.currentUser.uid, 'FW83vBSEVtGvR6gL9BmV')
        window.location.hash = '#credentials'
        break;
      case 'git':
        await addClientToInstitution(auth.currentUser.uid, 'MdaMUfiGTyUCXMoPfXWb')
        window.location.hash = '#credentials'
        break;
      case 'react':
        await addClientToInstitution(auth.currentUser.uid, 'TGjKgx8u6jyVfsFn9yh3')
        window.location.hash = '#credentials'
        break;
      default:
        console.log();
    }
  });

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