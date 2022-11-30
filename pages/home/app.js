// import { getAllBanks } from '../../lib/firestore.js';
import { logout } from '../../lib/auth.js';

export default () => {

  const container = document.createElement('div');
  const template = `   <div class="container-homepg">
    <div class="retangle-home">
        <div class="logo-home">
            <img id="logo-safra-home" href='#home' src="./img/logo-home.png" alt="Logo Safra"> <span class="userName">Olá,
                Fulano!</span>
        </div>
        <div class="total-balance">
            <p class="txt-balance">Saldo disponível</p>
            <div class="balance">
                <span class="totalValue"> R$15.300,00</span> 
            </div> 
            <div>
                <img id='btn-eyes' class='icon-eyes' alt='Ícone de olhos para mostrar/ocultar' src="./img/eyes-outline-icon.png">
            </div>
  
            <p class="txt-balance">Lançamentos futuros</p>
            <div class="balance">
                <span class="totalValue"> R$...</span> 
            </div> 
            <div>
                <img id='btn-eyes' class='icon-eyes' alt='Ícone de olhos para mostrar/ocultar' src="./img/eyes-outline-icon.png">    
            </div>

            <div class="txt-balance" id="showExt" >Vizualizar extrato</div>
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
        <div class="wrapper">  </div>
    </div>
  
    <div class="retangle-bottom-home">
        <div class="content-bottom-retangle">

            <a href="#home"><img id="icon-home" src="./img/icon-home.png" alt="Ícone HOME" style="width:35px;height:35px;"></a>
            <img id="icon-pix" src="./img/pix-icon.png" alt="Ícone Pix">
            <img id="icon-logout" src="./img/logout-icon.png" alt="Ícone de logout">
  
        </div>
    </div>
  
  </div>`;

  /*const btnShow = container.querySelector('#btn-eyes');
  const balance = container.querySelector('.balance');

  btnShow.addEventListener('click', function() {
    if (balance.style.display === 'block') {
      balance.style.display = 'none';
    } else{
      balance.style.display = 'block';
    }

  });*/

  /*const btnShow = container.querySelector('#btn-eyes');

  btnShow.addEventListener('click', function() {
    const balance = container.querySelector('.balance');
    balance.classList.toggle("hide");

  });*/

  container.innerHTML = template;
  const btnLogout = container.querySelector('#icon-logout');

  const btn = container.querySelector('#icon-home');
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
            <div class="ext"> 
            <li>Água: - 100,00</li>
            <li>Energia: -450,00</li>
            <li>Internet: -100,00</li>
            <li>Pensão alim.: 800,00</li>
            
            </div>
        </div>

    </div>`;
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

  
  
  return container;
}





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
      ;
    return banks;

  }).join('');

  container.querySelector('.container-bank').innerHTML += banksTemplate;
}

showBanks();
































