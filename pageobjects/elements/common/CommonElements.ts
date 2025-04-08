import { $ } from '@wdio/globals';

export default class CommonElements {

  public get inputName() {
    return $('#nome');
  };
  
  public get inputEmail() {
    return $('#email');
  };
  
  public get inputPassword() {
    return $('#password');
  };

  public get inputAdm() {
    return $('#administrador');
  };

  public get btnRegister() {
    return $('button[type="submit"]');
  };

}