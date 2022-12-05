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
       <img id="arrow-icon" src="./img/arrow.png" alt="Ícone - seta para a esquerda">
       </a>
           <p class="title-text"> Selecione o App</p> 
       </div>
  
       <div class="banks-container">
       <div class="box-banks"> 
  
       <div class="app-item-three">
           <a href="#credentials">
           <img data-action="css" class="icon-bank" src="./img/icon-dotz.png">
           </a>
       </div>
       
       <div class="app-item-four">
           <a href="#credentials">
           <img data-action="lab" class="icon-bank" src="./img/icon-mercado-pago.png">
           </a>
       </div>
       
       <div class="app-item-five">
           <a href="#credentials">
           <img data-action="git" class="icon-bank" src="./img/icon-ifood.png">
           </a>
       </div>
   
       <div class="app-item-six">
           <a href="#credentials">
           <img data-action="react" class="icon-bank" src="./img/icon-ame.png">
           </a>
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

    return container;
};