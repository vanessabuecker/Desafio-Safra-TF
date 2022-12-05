import { getAllBanks } from '../../lib/firestore.js';
import { logout } from '../../lib/auth.js';
import { auth } from '../../lib/config_firebase.js';

export default () => {

  const container = document.createElement('div');
  const template = ` <div class="container-homepg">
  <div class="retangle-home">
      <div class="logo-home">
          <img id="logo-safra-home" href='#home' src="./img/logo-home.png" alt="Logo Safra"> <span class="userName">Olá,
              Fulano!</span>
      </div>
      <div class="total-balance">
        <p class="txt-balance">Saldo disponível</p>
        <div class="balance">
             <span class="totalValue"> R$15.300,00</span> <div class="img-eyes"><img id="btn-eyes" src="./img/eyes-icon.png"
                 alt="Ícone olhos fechados"></div>
        </div>

        <p class="txt-balance">Lançamentos futuros</p>
        <div class="balance">
             <span class="totalValue"> R$...</span> <img id="btn-eyes" src="./img/eyes-icon.png"
                 alt="Ícone olhos abertos">                    
        </div> 
         
         <div class="txt-balance" id="showExt">
         <img id="ext-bank" src="./img/folha.png"
                 alt="Ícone open banking cor-de-rosa">
        <span class="ext-view"> Vizualizar extrato</span>
        </div>
    </div>
      <div class="button-openbanking-add">
          <a href="#openFinance"> <img id="icon-ob-add" src="./img/icon-open-banking.png"
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

      <div class="talk-to-safira"><a href="https://wa.me/5527997300762?text=Ol%C3%A1.%20Eu%20sou%20a%20Safira!%20Em%20que%20posso%20ajudar?" target="_blank"> <img id="safira-whats" src="./img/safira-whats.png"
      alt="Ícone open banking cor-de-rosa"> </a> </div>
      <div class="wrapper">  </div>
  </div>

  <div class="retangle-bottom-home">
      <div class="content-bottom-retangle">
          <a href="#home"><img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME"></a>
          <img id="icon-sino" src="./img/sino.png" alt="Ícone de sino">
          <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">

      </div>
  </div>

</div>`;

  container.innerHTML = template;

  const btnShow = container.querySelector('#btn-eyes');
  const balance = container.querySelector('.totalValue');
  const imgEyes = container.querySelector('.img-eyes')

  btnShow.addEventListener('click', function () {
    if (balance.style.display === 'flex') {
      balance.style.display = 'none';

    } else {
      balance.style.display = 'flex';
    }
  })

  const btnLogout = container.querySelector('#icon-logout');
  const showExt = container.querySelector('#showExt');

  showExt.addEventListener('click', (e) => {
    e.preventDefault();
    const modalContentElement = document.getElementById('modal_content');
    const modalElement = document.getElementById('modal');
    modalElement.classList.add('show-modal');
    modalContentElement.innerHTML = `
    <div class="container-ext">
    <div class="inst-name">Extrato</div>
    <div class="box-ext">
        <label for="period">Selecionar período:</label>
        <select name="month" id="month" form="monform">
            <option value="jan-fev">Janeiro - Fevereiro</option>
            <option value="marc-apr">Março - Abril</option>
            <option value="may-jun">Maio - Junho</option>
            <option value="jul-aug">Julho - Agosto</option>
            <option value="sep-oct">Setembro - Outubro</option>
            <option value="nov-dec">Novembro - Dezembro</option>
        </select>
    </div>
    <div class="result"> </div>
</div>`;
    let select = modalContentElement.querySelector('#month');
    const boxExt = modalContentElement.querySelector('.result');

    select.addEventListener('change', () => {
      if (select.options[select.selectedIndex].value === 'jan-fev') {
        boxExt.innerHTML = `   <div class="ext">
        <li> Invest.Css Resgate Autom. </li>
        <li class="ext-item-cred"> 100,00</li>
    </div>

    <div class="ext">
        <li> Conpra com cartão PADARIA NODE </li>
        <li class="ext-item-deb"> -100,00</li>
    </div>`
      }

      else if (select.options[select.selectedIndex].value === 'marc-apr') {
        boxExt.innerHTML = `   <div class="ext">
        <li> Invest.Css Resgate Autom. </li>
        <li class="ext-item-cred"> 900,00</li>
    </div>

    <div class="ext">
        <li> Conta com cartão SUP. SAO HTML </li>
        <li class="ext-item-deb"> -650,00</li>
    </div>`
      }
      else if (select.options[select.selectedIndex].value === 'may-jun') {
        boxExt.innerHTML = `   <div class="ext">
        <li> PIX enviado JOAO DA SILVA </li>
        <li class="ext-item-cred"> 2.500,00</li>
    </div>

    <div class="ext">
        <li> Compra com cartão SUP. MERCADO SAO NODE </li>
        <li class="ext-item-deb"> -650,00</li>
    </div>`
      }

      else if (select.options[select.selectedIndex].value === 'jul-aug') {
        boxExt.innerHTML = `   <div class="ext">
        <li> DOC JOSÉ SANTOS </li>
        <li class="ext-item-cred"> 4.500,50</li>
    </div>

    <div class="ext">
        <li> Compra com cartão MERC. SANTA'ANNA JS </li>
        <li class="ext-item-deb"> -350,00</li>
    </div>`
      }

      else if (select.options[select.selectedIndex].value === 'sep-oct') {
        boxExt.innerHTML = `   <div class="ext">
        <li> DOC JOSÉ SANTOS </li>
        <li class="ext-item-cred"> 4.500,00</li>
    </div>

    <div class="ext">
        <li> Compra com cartão MERC. SANTA'ANNA JS </li>
        <li class="ext-item-deb"> -545,00</li>
    </div>
    
    <div class="ext">
        <li> Compra com cartão MAT. CONST. REACT </li>
        <li class="ext-item-deb"> -5.650,20</li>
    </div>`
      }
      else if (select.options[select.selectedIndex].value === 'nov-dec') {
        boxExt.innerHTML = `   <div class="ext">
        <li> DOC JOSÉ SANTOS </li>
        <li class="ext-item-cred"> 1.000,00</li>
    </div>

    <div class="ext">
        <li> Compra com cartão MERC. SANTA'ANNA JS </li>
        <li class="ext-item-deb"> -231,10</li>
    </div>
    
    <div class="ext">
        <li> Compra com cartão PAPELARIA JAVASCRIPT </li>
        <li class="ext-item-deb"> -52,27</li>
    </div>`
      }
    })

  })

  const spanClose = document.querySelector('#close');
  function hideModal() {
    const modalElement = document.getElementById('modal');
    modalElement.classList.remove('show-modal');
  }

  spanClose.addEventListener('click', hideModal);

  btnLogout.addEventListener('click', (e) => {
    const main = document.querySelector('#root');
    e.preventDefault();
    logout().then(() => {
      window.location.hash = '';
    });
  });

  const showBanks = async () => {

    const allBanks = await getAllBanks();
    const banksTemplate = allBanks.map((bank) => {
      let banks = "";

      if (bank.cliente.includes(auth.currentUser.uid) === true) {
        banks = `
        <div class="bank-card">
          <span class="bank-name"> ${bank.instituicao}</span>
          <div class="logo-bank">
            <span class="account-type"> ${bank.tipo}</span>
          </div>
  
          <div class="balance-tamplate">
            <span class="totalValue" id="total-value-template">R$${bank.saldo} 
          </div>
        </div>`;

        return banks;

      } else {
      }

    }).join('');

    container.querySelector('.container-bank').innerHTML += banksTemplate;
  }

  showBanks();

  return container;
}






