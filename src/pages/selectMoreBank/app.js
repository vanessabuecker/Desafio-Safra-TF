import { logout } from '../../lib/auth.js';

export default () => {
    const container = document.createElement('div');
    const template = `      
     <div class="container-selectBank">
        <div class="retangle-selectBank"> 
          <img id="logo-safra-selectBank" src="./img/logo-home.png" alt="Logo Safra">
          <p class="user-name">Olá, Vanessa! </p>
        </div>

        <div class="title-container">
            <a href="#selectBank">
                <img id="arrow-icon" src="./img/arrow.png" alt="Ícone - seta para a esquerda">
            </a>
            <p class="title-text"> Selecione o Banco</p> 
        </div>
  
        <div class="banks-container">
        <div class="box-banks-container"> 

        <div class="name-bank">
            <a href="#credentials">
            <p>TudoBank</p>
            </a>
        </div>

        <div class="name-bank">
            <a href="#credentials">
            <p>Merge Bank</p>
            </a>
        </div>

        <div class="name-bank">
            <a href="#credentials">
            <p>Banco Aki</p>
            </a>
        </div>
        
        <div class="name-bank">
            <a href="#credentials">
            <p>Commit Bank</p>
            </a>
        </div>
        
        <div class="name-bank">
           <a href="#credentials">
            <p>Banco Pull</p>
            </a>
        </div>
    
        <div class="name-bank">
           <a href="#credentials">
            <p>Commit Bank</p>
            </a>
        </div>
        
        </div>
        </div>
        
        <div class="retangle-bottom-home">
        <div class="content-bottom-retangle">
            <a href="#home"><img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME"></a>
            <img id="icon-sino" src="./img/sino.png" alt="Ícone Pix">
            <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">
        </div>
  `;

    container.innerHTML = template;

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