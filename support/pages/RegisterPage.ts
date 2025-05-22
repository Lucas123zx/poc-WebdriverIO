import { $ } from '@wdio/globals';
import RegisterElements  from '../elements/RegisterElements';
import CommonElements from '../elements/CommonElements';
import { BasePage } from '../pages/BasePage';

let commonElements = new CommonElements();
let registerElements = new RegisterElements();

export class RegisterPage extends BasePage {

  async accessRegisterPage() {
    await this.open("/cadastrarusuarios");
  } 

  async writeName(name: string){
    await commonElements.inputName.addValue(name);
  }

  async writeEmail(email: string) {
    await commonElements.inputEmail.addValue(email);
  }

  async writePassword(password: string) {
    await commonElements.inputPassword.addValue(password);
  }

  async clickBtnAdm() {
    await commonElements.inputAdm.click();
  }

  async clickBtnRegister() {
    await this.waitElementDisplayed(commonElements.btnRegister);
    await commonElements.btnRegister.click();
  }

  async getMsgSucess() {
    await this.waitElementDisplayed(registerElements.msgSuccess);
    await this.getText(registerElements.msgSuccess);
  }

  async getMsgFail(element: string) {
    await this.waitElementDisplayed(`//span[contains(text(),'${element}')]`);
    await this.getText(`//span[contains(text(),'${element}')]`);
  }

  async registerUser(name: string, email: string, password: string) {
    await commonElements.inputName.addValue(name);
    await commonElements.inputEmail.addValue(email);
    await commonElements.inputPassword.addValue(password);
    await commonElements.btnRegister.click();
  }

  async registerUserAdm(name: string, email: string, password: string) {
    await commonElements.inputName.addValue(name);
    await commonElements.inputEmail.addValue(email);
    await commonElements.inputPassword.addValue(password);
    await commonElements.inputAdm.click();
    await commonElements.btnRegister.click();
  }

}