import { $ } from '@wdio/globals';

export default class RegisterPage  {

    get msgSuccess() {
        return $('a[class="alert-link"]')
    };

    msgFail(texto) {
        return $(`//span[text()="${texto}"]`);
    };
    
}

