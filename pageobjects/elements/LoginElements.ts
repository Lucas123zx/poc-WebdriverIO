import { $ } from '@wdio/globals';

export default class LoginElements {

    public get inputUsername() { 
        return $('#nome') 
    };

    public get inputEmail() { 
        return $('#email') 
    };

    public get inputPassword() { 
        return $('#password') 
    };

    public get btnLogin() { 
        return $('button[data-testid="entrar"]') 
    };

    public get msgInvalid() {
        return $('//span[normalize-space()="Email e/ou senha inválidos"]')
    };

    public get btnLinkRegister() { 
        return $('a[data-testid="cadastrar"]') 
    };
   
}
