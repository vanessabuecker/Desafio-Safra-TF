export default () => {
    const container = document.createElement('div');
    const template = `
          <div class="container-selectApp">
              <div class="retangle-selectApp"> 
                      <img id="logo-safra-selectApp" src="/img/logo-home.png" alt="Logo Safra">
                      <p class="user-name">Olá, </p>
              </div>
              <div class="title-container">
                  <a href="#addOpenFinance">
                      <img class="arrow-icon" src="/img/arrow.png" alt="Ícone - seta para a esquerda">
                  </a>
                  <p class="title-text"> Selecione o App</p> 
              </div>
              <div class="apps-container">
              <div class="app-item-um">
              <a href="#credentials">
                  <img class="icon-ifood" src="/img/icon-ifood.png">
              </a>
          </div>
          <div class="app-item-dois">
              <a href="#credentials">
                  <img class="icon-mercado-pago" src="/img/icon-mercado-pago.png">
              </a>
          </div>
          <div class="app-item-tres">
              <a href="#credentials">
                  <img class="icon-ame" src="/img/icon-ame.png">
              </a>
          </div>
          <div class="app-item-quatro">
              <a href="#credentials">
                  <img class="icon-dotz" src="/img/icon-dotz.png">
              </a>
          </div>
              </div>
              <div class="container-more">
                  <a href="#selectMoreApp">
                      <img class="icon-more" src="/img/icone-mais.png" alt="Ícone sinal de mais">
                      <p class="text-more"> Ver mais aplicativos</p>
                  </a>
              </div>
              <div class="retangle-bottom-home">          
                  <div class="content-bottom-retangle">
                      <img id="icon-home" src="/img/icon-home.png" alt="Ícone HOME">
                      <img id="icon-open-banking" src="/img/Vector.png" alt="Ícone Open Banking">
                  </div>
              </div>
          </div>
      `;
  
    container.innerHTML = template;
  
    return container;
  };