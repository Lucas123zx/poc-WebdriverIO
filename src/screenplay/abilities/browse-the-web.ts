import { Actor } from '../core/interfaces/actor';
import { ChainablePromiseElement, ChainablePromiseArray  } from 'webdriverio';

export class BrowseTheWeb {
    private browser;

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser;
    }

    static as(actor: Actor): BrowseTheWeb {
        const ability = (actor as any).abilities.get(BrowseTheWeb);
        if(!ability) {
            throw new Error(`${actor.name} não tem a habilidade de navegar na web!`);
        }
        return ability;
    }

    async navigateTo(url: string): Promise<void> {
        await this.browser.url(url);
    }

    async locator(selector: string): Promise<ChainablePromiseElement> {
        return this.browser.$(selector);
    }

    async locators(selector: string): Promise<ChainablePromiseArray> {
        return this.browser.$$(selector);
    }

    async getPageTitle(): Promise<string> {
        return this.browser.getTitle();
    }

    async takeScreenshot(name: string): Promise<void> {
        await this.browser.saveScreenshot(`./screenshots/${name}.png`);
    }

}