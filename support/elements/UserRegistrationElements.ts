import { $ } from '@wdio/globals';

export default class UserRegistrationsElements {

  public get alertPasswordEmpyt() {
    return $(`//span[contains(text(),'Password é obrigatório')]`);
  }
  
  public get alertNameEmpty() {
    return $(`//span[contains(text(),'Nome não pode ficar em branco')]`);
  }

  public get alertEmailEmpty() {
    return $(`//span[contains(text(),'Email não pode ficar em branco)]`);
  }

}