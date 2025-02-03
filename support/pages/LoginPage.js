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

    get btnLinkRegister() { 
        return $('a[data-testid="cadastrar"]') 
    };
   
}
