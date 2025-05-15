import LoginElements from '../elements/LoginElements';

export class LoginPage extends LoginElements {

  async writeInputEmail(email: string) {
    await this.inputEmail.addValue(email);
  }

  async writeInputPassword(password: string) {
    await this.inputPassword.addValue(password);
  }

  async clickBtnLogin() {
    await this.btnLogin.click();
  }

  async clickButtonRegister(){
    await this.btnLinkRegister.click();
  }

  async getTextInvalid() {
    await this.msgInvalid.waitForDisplayed();
    let msg = await this.msgInvalid.getText();
    return msg
  }

};