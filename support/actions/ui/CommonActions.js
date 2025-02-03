
import { Browser } from "../../browser/Browser";
import CommonPage from "../../pages/common/Common"

const commonPage = new CommonPage();

class CommonActions extends Browser {

  async writeName(name) {
    await commonPage.inputName.addValue(name);
  };

  async writeEmail(email) {
    await commonPage.inputEmail.addValue(email);
  };

  async writePassword(password) {
    await commonPage.inputPassword.addValue(password);
  };

  async clickBtnAdm() {
    await commonPage.inputAdm.click();
  };

  async registerUser(name, email, password) {
    await commonPage.inputName.addValue(name);
    await commonPage.inputEmail.addValue(email);
    await commonPage.inputPassword.addValue(password);
    await commonPage.btnRegister.click();
  };

  async registerUserAdm(name, email, password) {
    await commonPage.inputName.addValue(name);
    await commonPage.inputEmail.addValue(email);
    await commonPage.inputPassword.addValue(password);
    await this.clickBtnAdm();
    await commonPage.btnRegister.click();
  };

}

export default new CommonActions();