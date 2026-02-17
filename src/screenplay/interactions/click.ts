// test/screenplay/interactions/Click.ts
import { Task, Actor } from '../core/interfaces';
import { BrowseTheWeb } from '../abilities/browse-the-web';
 
export class Click implements Task {
    private selector;
    
    constructor(selector: string) {
        this.selector = selector;
    }

  // Sintaxe fluida: Click.on('#botao')
    static on(selector: string) {
        return new Click(selector);
    }

    async performAs(actor: Actor): Promise<void> {
        const browser = BrowseTheWeb.as(actor);
        const element = await browser.locator(this.selector);
        await element.waitForDisplayed();
        await element.click();
    }

}