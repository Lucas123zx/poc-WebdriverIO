export class RegisterElements {
  inputName = '#nome';
  inputEmail = '#email';
  inputPassword ='#password';
  inputAdm = '#administrador';
  btnRegister = 'button[data-testid="cadastrar"]';
  msgSuccess = 'a[class="alert-link"]';

  msgFaill(texto) {
    return `//span[text()="${texto}"]`;
  }
}

