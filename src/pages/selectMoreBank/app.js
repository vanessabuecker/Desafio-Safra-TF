export default () => {
    const container = document.createElement('div');
    const template = `      
     <div class="container-selectBank">
        <div class="retangle-selectBank"> 
          <img id="logo-safra-selectBank" src="./img/logo-home.png" alt="Logo Safra">
          <p class="user-name">Olá, </p>
        </div>

        <div class="title-container">
            <a href="#addOpenFinance">
            <img class="arrow-icon-selectBank" src="./img/arrow.png" alt="Ícone - seta para a esquerda">
            </a>
            <p class="title-text"> Selecione o Banco</p> 
        </div>
  
        <div class="banks-container">
        <div class="box-banks"> 
        <div class="app-item-one">
            <a href="#credentials">
            <p>TudoBank</p>
            </a>
        </div>
        <div class="app-item-two">
            <a href="#credentials">
            <p>Merge Bank</p>
            </a>
        </div>

        <div class="app-item-three">
            <a href="#credentials">
            <p>Banco Aki</p>
            </a>
        </div>
        
        <div class="app-item-four">
            <a href="#credentials">
            <p>Commit Bank</p>
            </a>
        </div>
        
        <div class="app-item-five">
           <a href="#credentials">
            <p>Banco Pull</p>
            </a>
        </div>
    
        <div class="app-item-six">
           <a href="#credentials">
            <p>Commit Bank</p>
            </a>
        </div>
        </div>
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

    return container;
};