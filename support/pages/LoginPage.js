import { $ } from '@wdio/globals';

export default class LoginPage {

    get inputUsername() { 
        return $('#nome') 
    };

    get inputEmail() { 
        return $('#email') 
    };

    get inputPassword() { 
        return $('#password') 
    };

    get btnLogin() { 
        return $('button[data-testid="entrar"]') 
    };

    get msgInvalid() {
        return $('//span[normalize-space()="Email e/ou senha inválidos"]')
    };

    get btnLinkRegister() { 
        return $('a[data-testid="cadastrar"]') 
    };
   
}
