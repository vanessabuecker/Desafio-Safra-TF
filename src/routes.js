import login from './pages/login/app.js';
import home from './pages/home/app.js';
import register from './pages/register/app.js';
import new_bank from './pages/new_bank/app.js';
import openFinance from './pages/openFinance/app.js';
import addNewBank from './pages/selectBank/app.js';
import selectMorebank from './pages/selectMorebank/app.js';
import selectApp from './pages/selectApp/app.js';
///import selectMoreApp from './pages/selectMoreApp/app.js';

const main = document.querySelector('.root');

const init = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case ' ':
      main.appendChild(register());
      break;
    case '#register':
      main.innerHTML = '';
      main.appendChild(register());
      break;
      case '#home':
        main.innerHTML = '';
        main.appendChild(home());
        break;
      case '#openFinance':
        main.innerHTML = '';
        main.appendChild(openFinance());
        break;
      case '#selectBank':
        main.innerHTML = '';
        main.appendChild(addNewBank());
        break;
      case '#selectMoreBank':
        main.innerHTML = '';
        main.appendChild(selectMorebank());
        break;
      case '#selectApp':
        main.innerHTML = '';
        main.appendChild(selectApp());
      break;
      case '#selectMoreApp':
        main.innerHTML = '';
        main.appendChild(selectMoreApp());
      break;
    case '#new_bank':
      main.innerHTML = '';
      main.appendChild(new_bank());
      break;
    case '#home':
      main.innerHTML = '';
      main.appendChild(home());
      break;
    
      

    default: main.appendChild(login());
  }
};

window.addEventListener('hashchange', () => {
  init();
});

window.addEventListener('load', () => {
  main.appendChild(login())
  init();
});
