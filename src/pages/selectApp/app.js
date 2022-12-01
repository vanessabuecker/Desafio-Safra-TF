import { logout } from "../../lib/auth.js";

export default () => {
    const container = document.createElement('div');
    const template = `
          <div class="container-selectApp">
          <div class="retangle-home">
          <div class="logo-home">
              <img id="logo-safra-home" href='#home' src="./img/logo-home.png" alt="Logo Safra"> <span class="userName">Olá,
                  Sabrina!</span>
          </div>
          <div class="instruction-title">
        <a href="#openFinance"><img id="arrow-icon" src="../img/arrow.png" alt="Ícone - seta para a esquerda"/></a>
      </div>
      <div id="form-credentials">
        <p class="titles">Inserir Credenciais</p>
      </div>  

            <div class="instruction-title">
            <a href="#openFinance">
                <img class="arrow-icon-selectBank" src="./img/arrow.png" alt="Ícone - seta para a esquerda">
            </a>
            <div id="form-credentials">
                <p class="titles">Selecione banco</p>
            </div> 
              <div class="apps-container">
              <div class="app-item-um">
              <a href="#credentials">
                  <img class="icon-ifood" src="/src/img/icon-ifood.png">
              </a>
          </div>
          <div class="app-item-dois">
              <a href="#credentials">
                  <img class="icon-mercado-pago" src="/src/img/icon-mercado-pago.png">
              </a>
          </div>
          <div class="app-item-tres">
              <a href="#credentials">
                  <img class="icon-ame" src="/src/img/icon-ame.png">
              </a>
          </div>
          <div class="app-item-quatro">
              <a href="#credentials">
                  <img class="icon-dotz" src="/src/img/icon-dotz.png">
              </a>
          </div>
              </div>
              <div class="container-more">
                  <a href="#selectMoreApp">
                      <img class="icon-more" src="/src/img/icone-mais.png" alt="Ícone sinal de mais">
                      <p class="text-more"> Ver mais aplicativos</p>
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
  
    return container;
  };