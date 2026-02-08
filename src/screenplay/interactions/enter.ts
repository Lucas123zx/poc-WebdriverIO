import { Actor, Task } from '../core/interfaces';
import { BrowseTheWeb } from '../abilities/browse-the-web';

export class Enter implements Task {
  private value;
  private selector;

  constructor(value: string, selector: string) {
    this.value = value;
    this.selector = selector;
  }

  static theValue(value: string) {
    return {
      into: (selector: string) => new Enter(value, selector)
    };
  }

  // Execução real pelo Ator
  async performAs(actor: Actor): Promise<void> {
    const browser = BrowseTheWeb.as(actor);
    const element = await browser.locator(this.selector);
    await element.setValue(this.value);
  }
}