export default () => {
  const container = document.createElement('div');
  const template = `
    <div class="container-login">
        <div class="logo">
            <img id="logo-safra" src="../src/img/logo.png">
        </div>
    
        <form class='container-inputs-login'>
            <input class='inputs' type='number' id='input-id' />
            <label for='text-id' class='text-inputs'>CPF/CNPJ</label>
            <input class='inputs' type='password' id='input-password' />
            <label for='text-password' class='text-inputs'>Senha</label>
        </form>
        <div class="button-login"> <a href="#home">
            <button type='button'  class='btn-enter' id='btn-enter'>Entrar</button>
        </div>
        <div class="teste">
            <a class='text-href' id='btn-forgot-password' href='#NAOSEI'>Esqueci a senha</a>
        </div>
        <div class="teste">
            <a class='text-href'id='btn-cadastro'href='#register'>Cadastre-se</a>
        </div>
    </div> 
   `;

  container.innerHTML = template;

  return container;
};