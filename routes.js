import login from './pages/login/app.js';
import home from './pages/home/app.js';
import register from './pages/register/app.js';
import openFinance from './pages/openFinance/app.js';

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
