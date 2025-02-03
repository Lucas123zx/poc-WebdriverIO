import { $ } from '@wdio/globals';

export default class Common {

  get inputName() {
    return $('#nome')
  };
  
  get inputEmail() {
    return $('#email')
  };
  
  get inputPassword() {
    return $('#password')
  };

  get inputAdm() {
    return $('#administrador')
  };

  get btnRegister() {
    return $('button[type="submit"]')
  };

}