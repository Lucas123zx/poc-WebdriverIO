import { $ } from '@wdio/globals';

export default class LoginElements {

    protected get inputUsername() { 
        return $('#nome');
    }

    protected get inputEmail() { 
        return $('#email');
    }

    protected get inputPassword() { 
        return $('#password'); 
    }

    protected get btnLogin() { 
        return $('button[data-testid="entrar"]'); 
    }

    protected get msgInvalid() {
        return $('//span[normalize-space()="Email e/ou senha inválidos"]');
    }

    protected get btnLinkRegister() { 
        return $('a[data-testid="cadastrar"]'); 
    }
   
}
