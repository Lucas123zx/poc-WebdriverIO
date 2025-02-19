import { Browser } from "../../browser/Browser";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

class LoginActions extends Browser {

  async login (email, password) {
    await loginPage.inputEmail.addValue(email);
    await loginPage.inputPassword.addValue(password);
    await loginPage.btnLogin.click();
  };

  async clickButtonRegister(){
      await loginPage.btnLinkRegister.click();
  };

  async getTextInvalid() {
    await loginPage.msgInvalid.waitForDisplayed();
    let msg = await loginPage.msgInvalid.getText();
    return msg
  }

  async visitUrl() {
      return await super.open('/login');
  }; 

}

export default new LoginActions();