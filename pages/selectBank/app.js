import { addClientToInstitution } from '../../lib/firestore.js';
import { auth } from '../../lib/config_firebase.js';
import { logout } from '../../lib/auth.js';

export default () => {
    const container = document.createElement('div');
    const template = `      
     <div class="container-selectBank">
        <div class="retangle-selectBank"> 
          <img id="logo-safra-selectBank" src="./img/logo-home.png" alt="Logo Safra">
          <p class="user-name">Olá, </p>
        </div>

        <div class="title-container">
            <a href="#openFinance">
                <img id="arrow-icon" src="../src/img/arrow.png" alt="Ícone - seta para a esquerda">
            </a>
            <p class="title-text"> Selecione o Banco</p> 
        </div>
  
        <div class="banks-container">
        <div class="box-banks"> 
        <div class="app-item-one">
            <a href="#credentials">
            <img class="icon-bank" src="./img/icon-html.png">
            </a>
        <p>HTML Bank</p>
        </div>
        <div class="app-item-two">
            <a href="#credentials">
            <img class="icon-bank" src="./img/icon-java-script.png">
            </a>
            <p>JS Bank</p>
        </div>

        <div class="app-item-three">
            <a href="#credentials">
            <img class="icon-bank" src="./img/icon-css.png">
            </a>
            <p>CSS Bank</p>
        </div>
        
        <div class="app-item-four">
            <a href="#credentials">
            <img class="icon-bank" src="./img/icon-lab.png">
            </a>
            <p>LAB Bank</p>
        </div>
        
        <div class="app-item-five">
            <a href="#credentials">
            <img class="icon-bank" src="./img/icon-github.png">
            </a>
            <p>GIT Bank</p>
        </div>
    
        <div class="app-item-six">
            <a href="#credentials">
            <img class="icon-bank" src="./img/icon-react.png">
            </a>
            <p>REACT Bank</p>
        </div>
        </div>
        </div>
        <div class="container-more-selectBank">
        <div class="box-selectmore"> <a href="#selectMoreBank">
            <img class="icon-more-selectBank" src="./img/icone-mais.png" alt="Ícone sinal de mais">  </div> 
            
            <p class="text-more"> Ver mais instituições</p>
            </a>
        </div>
        <div class="retangle-bottom-home">
        <div class="content-bottom-retangle">
            <img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME">
            <img id="icon-pix" src="./img/pix-icon.png" alt="Ícone Pix">
            <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">
        </div>
        </div>
        </div>
  `;

    container.innerHTML = template;

    container.innerHTML = template;
    const btnLogout = container.querySelector('#icon-logout');

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
            default:
                console.log();
        }
    });

    btnLogout.addEventListener('click', (e) => {
        const main = document.querySelector('#root');
        e.preventDefault();
        logout().then(() => {
          window.location.hash = '';
        });
      });

    return container;
};