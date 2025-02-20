import CommonPage from "../../pages/common/Common"

class CommonActions extends CommonPage {

  async writeName(name) {
    await this.inputName.addValue(name);
  };

  async writeEmail(email) {
    await this.inputEmail.addValue(email);
  };

  async writePassword(password) {
    await this.inputPassword.addValue(password);
  };

  async clickBtnAdm() {
    await this.inputAdm.click();
  };

  async registerUser(name, email, password) {
    await this.inputName.addValue(name);
    await this.inputEmail.addValue(email);
    await this.inputPassword.addValue(password);
    await this.btnRegister.click();
  };

  async registerUserAdm(name, email, password) {
    await this.inputName.addValue(name);
    await this.inputEmail.addValue(email);
    await this.inputPassword.addValue(password);
    await this.clickBtnAdm();
    await this.btnRegister.click();
  };

}

export default new CommonActions();