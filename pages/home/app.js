// import { banks } from "../../exports.js";
import { getAllBanks } from '../../lib/exports.js';

export default () => {
  const container = document.createElement('div');

  const template = `   <div class="container-homepg">
    <div class="retangle-home">
        <div class="logo-home">
            <img id="logo-safra-home" src="./img/logo-home.png" alt="Logo Safra"> <span class="userName">Olá,
                Fulana!</span>
        </div>
        <div class="total-balance">
            <p class="txt-balance">Saldo disponível</p>
            <div class="balance">
                <span class="totalValue"> R$15.300,00</span> <img class="icon-eyes" src="./img/eyes-off-icon.png"
                    alt="Ícone olhos fechados">
            </div>
  
            <p class="txt-balance">Lançamentos futuros</p>
            <div class="balance">
                <span class="totalValue"> R$...</span> <img class="icon-eyes" src="./img/eyes-outline-icon.png"
                    alt="Ícone olhos abertos">
            </div>
        </div>
        <div class="button-openbanking-add">
            <a href="#selectBank"> <img id="icon-ob-add" src="./img/icon-open-banking.png"
                    alt="Ícone open banking cor-de-rosa"> </a> Adicionar Open Finance
        </div>
  
        <div class="container-bank">
            
        </div>
  
        <div class="pendencies">
            <span class="pendencies-title"> Pendências <img class="icon-caution" src="./img/caution-icon.png" alt="Ícone de precaução">
            </span>
        </div>
        
        <div class="pendencies-list">
             <img class="icon-caution" src="./img/ReactBank.png"
                alt="Ícone de precaução"> <span id="item-list"> Cartão</span>  <span id="balance-pend"> R$3.560,00</span>
        </div>
        <div class="wrapper">  </div>
    </div>
  
    <div class="retangle-bottom-home">
        <div class="content-bottom-retangle">
            <img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME">
            <img id="icon-pix" src="./img/pix-icon.png" alt="Ícone Pix">
            <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">
  
        </div>
    </div>
  
  </div>`;

  container.innerHTML = template;

  const btn = container.querySelector('#icon-home')


  btn.addEventListener('click', () => {
    return console.log(allBanks)
  })

  const showBanks = async () => {
    const allBanks = await getAllBanks();
    const banksTemplate = allBanks.map((bank) => {

      const banks = `
      <div class="bank-card">
      <div class="logo-bank">
                        <img id="logo-alfa" src="./img/ReactBank.png" alt="Ícone open banking cor-de-rosa">
                        <span class="account-type"> ${bank.tipo}</span>
                      </div>
  
            <div class="balance-tamplate">
                <span class="totalValue" id="total-value-template">${bank.saldo} </span> <img class="icon-eyes-template"
                    src="./img/eyes-off-icon.png" alt="Ícone olhos abertos">
            </div>
            </div>`

      return banks;
    }).join('');
    container.querySelector('.container-bank').innerHTML += banksTemplate;
  }
  showBanks();


  return container;
}


