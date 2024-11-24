import { $ } from '@wdio/globals';
import { Browser }  from '../browser/Browser';
class LoginPage extends Browser{

    get inputUsername() {return $('#nome')};
    get inputEmail() {return $('#email')};
    get inputPassword() {return $('#password')};
    get btnLogin() {return $('button[data-testid="entrar"]')};
    get btnLinkRegister() {return $('a[data-testid="cadastrar"]')};


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
