import { expect } from '@wdio/globals';
import { expect as expectChai } from 'chai';

export class BaseSteps {

    static async validarSeEstouNaUrl(url) {
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toHaveUrl(url);
    }
}
