import { logout } from "../../lib/auth.js";

export default () => {
    const container = document.createElement('div');
    const template = `
    <div class="container-home">
    <div class="retangle-home">
    <div class="logo-home">
        <img id="logo-safra-home" href='#home' src="./img/logo-home.png" alt="Logo Safra"> <span class="userName">Olá,
            Sabrina!</span>
    </div>
      
        <div class="title-container">
            <a href="#home">
                <img id="arrow-icon" src="../img/arrow.png" alt="Ícone - seta para a esquerda">
            </a>
            <p class="title-text"> De onde você quer trazer seus dados?</p> 
        </div>
      
        <div class="btn-container"> 
              <div class="btn-items">
                  <a href="#selectBank">
                    <button type='button'  class='btn' id='btn-banks'>BANCOS</button>
                  </a>
                  <a href="#selectApp">
                      <button type='button'  class='btn' id='btn-apps'>APPS</button>
                  </a>
              </div>       
        </div>
      
          <div class="article-container">
              <p class="article-text">
                Com o Open Finance, você traz seus dados de outras instituições para o Safra e tem benefícios e ofertas cada vez mais personalizados.
                Com o open finance você é dono dos seus dados e terá mais autonomia para decidir o que é melhor para sua
                necessidade, além de poder gerenciar sua vida financeira em um só lugar, facilitando seu dia a dia. É simples, rápido, gratuito.  
              </p>
              <div class="avatar-container">
                  <img class="icon-avatar" src="../img/icon-avatar.png" alt="Imagem do assistente virtual Safra"> 
              </div>
          </div>
          <div class="open-finance-container">
              <a class="open-finance-text" href="https://www.safra.com.br/o-que-e-open-finance.htm#open-finance" target="_blank">Conheça o Open Finance</a>
          </div>
      
      <div class="retangle-bottom-home">
          <div class="content-bottom-retangle">
            <a href="#home">
              <img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME">
            </a>  
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

  
    return container;
  };