import { $ } from '@wdio/globals';

export default class RegisterElements  {

    public get msgSuccess() {
        return $('a[class="alert-link"]')
    };

    public msgFail(text: string) {
        return $(`//span[text()="${text}"]`);
    };
    
}

