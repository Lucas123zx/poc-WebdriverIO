import LoginElements from '../elements/LoginElements';

class LoginPage extends LoginElements {

  async login (email: string, password: string) {
    await this.inputEmail.addValue(email);
    await this.inputPassword.addValue(password);
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

}

export default new LoginPage();