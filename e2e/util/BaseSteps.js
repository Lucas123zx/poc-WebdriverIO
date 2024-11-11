import { expect } from '@wdio/globals';
export class BaseSteps {

    static async validarSeEstouNaUrl(url) {
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toHaveUrl(url);
    }

    static async screenshot() {
        await browser.takeScreenshot();
    }

}
