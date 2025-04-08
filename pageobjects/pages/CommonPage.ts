import CommonElements from '../elements/common/CommonElements';

class CommonPage extends CommonElements {

  async writeName(name: string){
    await this.inputName.addValue(name);
  };

  async writeEmail(email: string) {
    await this.inputEmail.addValue(email);
  };

  async writePassword(password: string) {
    await this.inputPassword.addValue(password);
  };

  async clickBtnAdm() {
    await this.inputAdm.click();
  };

  async registerUser(name: string, email: string, password: string) {
    await this.inputName.addValue(name);
    await this.inputEmail.addValue(email);
    await this.inputPassword.addValue(password);
    await this.btnRegister.click();
  };

  async registerUserAdm(name: string, email: string, password: string) {
    await this.inputName.addValue(name);
    await this.inputEmail.addValue(email);
    await this.inputPassword.addValue(password);
    await this.clickBtnAdm();
    await this.btnRegister.click();
  };

}

export default new CommonPage();