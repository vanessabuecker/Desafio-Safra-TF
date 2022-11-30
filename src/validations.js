export function errorsFirebase(error) {
  switch (error) {
    case 'auth/invalid-email':
      return 'Ops, e-mail inserido não é válido!';
    case 'auth/weak-password':
      return 'Ops, a senha deve ter 6 ou mais caracteres!';
    case 'auth/invalid-password':
      return 'Senha incorreta.';
    case 'auth/email-already-in-use':
      return 'O e-mail inserido já possui cadastro, volte à página de login!';
    case 'auth/wrong-password':
      return 'O e-mail ou a senha não está correto!';
    case 'auth/user-not-found':
      return 'O e-mail não possui cadastro, cadastre-se!';
    default:
      return '';
  }
}

export const validateRegister = (name, lastname, cpf, balance, email, password, passwordRepeat) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
  const emailValid = regexEmail.test(email);
  // const regexCpf = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;
  // const cpfValid = regexCpf.test(cpf);

  if (!name && !cpf && !email && !password && !passwordRepeat) {
    return 'Por favor, preencha todos os campos!';
  }
  if (name === '') {
    return 'Preencha o campo de nome!';
  }
  if (lastname === '') {
    return 'Preencha o campo de sobrenome!';
  }
  if (cpf === '') {
    return 'Preencha o campo de CPF!';
  }
  // if (cpfValid === false) {
  //  return 'Insira um cpf válido (ex: 000.000.00-00)';
  // }
  if (balance === '') {
    return 'Preencha o campo de saldo!';
  }
  if (email === '') {
    return 'Preencha o campo de e-mail!';
  }
  if (emailValid === false) {
    return 'Insira um e-mail válido (ex: exemple@email.com)';
  }
  if (password === '') {
    return 'Digite sua senha!';
  }
  if (password !== passwordRepeat) {
    return 'As duas senhas não são iguais';
  }  
  
  return '';
};

export const validateLogin = (email, password, cpf) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
  const emailValid = regexEmail.test(email);
  // const regexCpf = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;
  // const cpfValid = regexCpf.test(cpf);

  if (!cpf && !email && !password ) {
    return 'Por favor, preencha todos os campos!';
  }
  // if (cpfValid === false) {
  //   return 'Insira um cpf válido (ex: 000.000.00-00)';
  // }
  if (cpf === '') {
    return 'Preencha o campo de CPF!';
  }
  if (email === '') {
    return 'Preencha o campo de e-mail!';
  }
  if (emailValid === false) {
    return 'Insira um e-mail válido (ex: exemple@email.com)';
  }
  if (password === '') {
    return 'Digite sua senha!';
  }
  
  return '';
};
