import LoginElements from '../elements/LoginElements';
import { BasePage } from './BasePage';

let loginElements = new LoginElements();
export class LoginPage extends BasePage {

   async accessLoginPage() {
    await this.open("/login");
  } 

  async writeInputEmail(email: string) {
    await loginElements.inputEmail.addValue(email);
  }

  async writeInputPassword(password: string) {
    await loginElements.inputPassword.addValue(password);
  }

  async clickBtnLogin() {
    await loginElements.btnLogin.click();
  }

  async clickButtonRegister(){
    await loginElements.btnLinkRegister.click();
  }

  async getTextInvalid() {
    await loginElements.msgInvalid.waitForDisplayed();
    let msg = await loginElements.msgInvalid.getText();
    return msg
  }

  async login (email: string, password: string) {
    await this.open('/login') 
    await this.writeInputEmail(email);
    await this.writeInputPassword(password)
    await this.clickBtnLogin();
  }

};