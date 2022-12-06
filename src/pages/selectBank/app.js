import { addClientToInstitution } from '../../lib/firestore.js';
import { auth } from '../../lib/config_firebase.js';

export default () => {
  const container = document.createElement('div');
  const template = `      
  <div class="container-selectBank">
     <div class="retangle-selectBank"> 
       <img id="logo-safra-selectBank" src="./img/logo-home.png" alt="Logo Safra">
       <p class="user-name">Olá, Vanessa! </p>
     </div>

     <div class="title-container">
         <a href="#openFinance">
         <img class="arrow-icon" src="./img/arrow.png" alt="Ícone - seta para a esquerda">
         </a>
         <p class="title-text"> Selecione o Banco</p> 
     </div>

     <div class="banks-container">
     <div class="box-banks"> 
     <div class="app-item-one">
         <a href="#credentials">
         <img data-action="html" class="icon-bank" src="./img/icon-html.png">
         </a>
     <p>HTML Bank</p>
     </div>
     <div class="app-item-two">
         <a href="#credentials">
         <img data-action="js" class="icon-bank" src="./img/icon-java-script.png">
         </a>
         <p>JS Bank</p>
     </div>

     <div class="app-item-three">
         <a href="#credentials">
         <img data-action="css" class="icon-bank" src="./img/icon-css.png">
         </a>
         <p>CSS Bank</p>
     </div>
     
     <div class="app-item-four">
         <a href="#credentials">
         <img data-action="lab" class="icon-bank" src="./img/icon-lab.png">
         </a>
         <p>LAB Bank</p>
     </div>
     
     <div class="app-item-five">
         <a href="#credentials">
         <img data-action="git" class="icon-bank" src="./img/icon-github.png">
         </a>
         <p>GIT Bank</p>
     </div>
 
     <div class="app-item-six">
         <a href="#credentials">
         <img data-action="react" class="icon-bank" src="./img/icon-react.png">
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
         <a href="#home"><img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME"></a>
         <img id="icon-sino" src="./img/sino.png" alt="Ícone de sino">
         <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">
     </div>
     </div>
     </div>
`;

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

  return container;
};