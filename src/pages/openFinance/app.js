export default () => {
    const container = document.createElement('div');
    const template = `
      <div class="container-home">
          <div class="header-credentials">
              <img class="logo-safra" src="../src/img/logo-home.png" alt="Logo Safra">
              <p class="user-name">Olá, Fulano </p>
          </div>
      
        <div class="title-container">
            <a href="#home">
                <img id="arrow-icon" src="../src/img/arrow.png" alt="Ícone - seta para a esquerda">
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
                  <img class="icon-avatar" src="../src/img/icon-avatar.png" alt="Imagem do assistente virtual Safra"> 
              </div>
          </div>
          <div class="open-finance-container">
              <p class="open-finance-text">Conheça o Open Finance</p>
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