import { $ } from '@wdio/globals';
import { Browser }  from '../browser/openBrowser.js';
import { LoginElements } from '../components/loginElements.js';

const loginElements = new LoginElements();

class LoginPage extends Browser{

    get inputUsername() {return $(loginElements.inputUsername)};
    get inputPassword() {return $(loginElements.inputPassword)};
    get btnLogin() {return $(loginElements.btnLogin)};
    get btnLinkRegister() {return $(loginElements.btnLinkRegister)};


    async login (username, password) {
        await this.inputUsername.addValue(username);
        await this.inputPassword.addValue(password);
        await this.btnLogin.click();
    }

    async click(){
        await this.btnRegister.click();
    }

    async open () {
        return await super.open('login');
    }

   
}

export default new LoginPage();
