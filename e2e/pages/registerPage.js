import { $ } from '@wdio/globals';
import { RegisterElements } from '../components/registerElements.js';
import { Browser } from '../browser/Browser.js';

const registerElements = new RegisterElements();

class RegisterPage extends Browser {

    get inputName() {return $(registerElements.inputName)};
    get inputEmail() { return $(registerElements.inputEmail)};
    get inputPassword() { return $(registerElements.inputPassword)};
    get inputAdm() { return $(registerElements.inputAdm)};
    get btnRegister() { return $(registerElements.btnRegister)};
    get msgSuccess() {return $(registerElements.msgSuccess)};
    msgFaill(texto) {return $(registerElements.msgFaill(texto))};


    async writeName(name) {
        await this.inputName.addValue(name);
    };

    async writeEmail(email) {
        await this.inputEmail.addValue(email);
    };

    async writePasswor(email) {
        await this.inputPassword.addValue(email);
    };

    async clickBtnAdm() {
        await this.inputAdm.click();
    };

    async clickBtnRegister() {
        await this.btnRegister.click();
    };

    async getMsg(texto) {
        const msgSucess = await this.msgSuccess.isDisplayed();
        if( msgSucess === true)
            return await this.msgSuccess.getText();
        else {
            return await this.msgFaill(texto).getText();
        }
    };

    async open () {
        return await super.open('cadastrarusuarios');
    };

    
}

export default new RegisterPage();
