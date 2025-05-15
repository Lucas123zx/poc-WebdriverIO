import CommonElements from '../elements/CommonElements';

export class CommonPage extends CommonElements {

  async writeName(name: string){
    await this.inputName.addValue(name);
  }

  async writeEmail(email: string) {
    await this.inputEmail.addValue(email);
  }

  async writePassword(password: string) {
    await this.inputPassword.addValue(password);
  }

  async clickBtnAdm() {
    await this.inputAdm.click();
  }

  async clickBtnRegister() {
    await this.btnRegister.click();
  }
}