import { $ } from '@wdio/globals';

export default class RegisterPage  {

    public get msgSuccess() {
        return $('a[class="alert-link"]')
    };

    public msgFail(text: string) {
        return $(`//span[text()="${text}"]`);
    };
    
}

