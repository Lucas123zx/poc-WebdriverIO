import { $ } from '@wdio/globals';

export default class RegisterElements  {

    public get msgSuccess() {
        return $('a[class="alert-link"]');
    }

    public get msgFailNameRequired() {
        return $('//span[text()="Nome é obrigatório"]');
    }
    
    public get msgFailEmailRequired() {
        return $('//span[text()="Email é obrigatório"]');
    }
    
    public get msgFailPasswordRequired() {
        return $('//span[text()="Password é obrigatório"]');
    }
    
}

