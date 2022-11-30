export default () => {
    const container = document.createElement('div');
    const template = `      
     <div class="container-selectMoreApp">
        <div class="retangle-selectApp"> 
          <img id="logo-safra-selectApp" src="./img/logo-home.png" alt="Logo Safra">
          <p class="user-name">Olá, </p>
        </div>

        <div class="title-container">
            <a href="#addOpenFinance">
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
            <img id="icon-pix" src="./img/pix-icon.png" alt="Ícone Pix">
            <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">
        </div>
        </div>
        </div>
  `;

    container.innerHTML = template;

    return container;
};