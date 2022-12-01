import { logout } from '../../lib/auth.js';

export default () => {
    const container = document.createElement('div');
    const template = `      
     <div class="container-selectMoreApp">
        <div class="retangle-selectApp"> 
          <img id="logo-safra-selectApp" src="./img/logo-home.png" alt="Logo Safra">
          <p class="user-name">Olá, </p>
        </div>

        <div class="title-container">
            <a href="#selectApp">
            <img class="arrow-icon-selectApp" src="./img/arrow.png" alt="Ícone - seta para a esquerda">
            </a>
            <p class="title-text"> Selecione o App</p> 
        </div>
  
        <div class="app-container">
        <div class="box-app"> 
        <div class="app-item-one">
            <a href="#credentials">
            <p>Clube do app</p>
            </a>
        </div>
        <div class="app-item-two">
            <a href="#credentials">
            <p>Vantagex</p>
            </a>
        </div>

        <div class="app-item-three">
            <a href="#credentials">
            <p>Red cup</p>
            </a>
        </div>
        
        <div class="app-item-four">
            <a href="#credentials">
            <p>Collection</p>
            </a>
        </div>
        
        <div class="app-item-five">
           <a href="#credentials">
            <p>Ligth</p>
            </a>
        </div>
    
        <div class="app-item-six">
           <a href="#credentials">
            <p>Fork</p>
            </a>
        </div>
        </div>
        </div>
        
        <div class="retangle-bottom-home">
        <div class="content-bottom-retangle">
            <img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME">
            <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">
        </div>
        </div>
        </div>
  `;

    container.innerHTML = template;

    const btnLogout = container.querySelector('#icon-logout');

    btnLogout.addEventListener('click', (e) => {
        const main = document.querySelector('#root');
        e.preventDefault();
        logout().then(() => {
          window.location.hash = '';
        });
      });

    const btnHome = container.querySelector('#icon-home');

    btnHome.addEventListener('click', () => {
        window.location.hash = '#home';
      });

    return container;
};