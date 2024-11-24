import { $ } from '@wdio/globals';
import { Browser } from '../browser/Browser';
class RegisterPage extends Browser {

    get inputName() {return $('#nome')};
    get inputEmail() { return $('#email')};
    get inputPassword() { return $('#password')};
    get inputAdm() { return $('#administrador')};
    get btnRegister() { return $('button[data-testid="cadastrar"]')};
    get msgSuccess() {return $('a[class="alert-link"]')};

    msgFail(texto) {
        return $(`//span[text()="${texto}"]`);
    };

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

    async clickBtnRegister() {
        await this.btnRegister.click();
    };

    async getMsgSucess() {
        await this.msgSuccess.isDisplayed();  
        const msgSucess = await this.msgSuccess.getText();
        return msgSucess;
    };

    async getMsgFail(texto) {
        this.msgFail(texto).isDisplayed();
        const msgFail = await this.msgFail(texto).getText();
        return msgFail;
    };

    async open () {
        return await super.open('cadastrarusuarios');
    };

    async registerUser(name, email, password) {
        await this.writeName(name);
        await this.writeEmail(email);
        await this.writePassword(password);
        await this.clickBtnRegister();
    };

    async registerUserAdm(name, email, password) {
        await this.writeName(name);
        await this.writeEmail(email);
        await this.writePassword(password);
        await this.clickBtnAdm();
        await this.clickBtnRegister();
    }

    
}

export default new RegisterPage();
