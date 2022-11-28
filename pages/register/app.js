export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-register">
      <div class="logo">
          <img id="logo-safra" src="../src/img/logo.png">
      </div>
  
      <form class='container-inputs-register'>
          <input class='inputs' type='text' id='input-name' />
          <label for='text-name' class='text-inputs'>Nome</label>
          <input class='inputs' type='number' id='input-cpf' />
          <label for='text-cpf' class='text-inputs'>CPF/CNPJ</label>
          <input class='inputs' type='password' id='input-password' />
          <label for='text-password' class='text-inputs'>Senha</label>
          <input class='inputs' type='number' id='input-saldo' />
          <label for='text-saldo' class='text-inputs'> Insira seu saldo disponível na conta corrente do Banco Safra</label>
      </form>
      <div class="button-register"> <a href="#home"> <button type='button' class='btn-enter' id='btn-enter'>Cadastrar</button>
      </div>
      <div class="teste"> <a id='forgot-password' href='#login'>Já possui cadastro? <br> Faça seu login</a> </div> 
     `;
  
    container.innerHTML = template;
  
    return container;
  };