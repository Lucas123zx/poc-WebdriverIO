import { Question, Actor } from '../core/interfaces';
import { BrowseTheWeb } from '../abilities/browse-the-web';
import { HomeElements } from '../ui/HomeElements';

export class WelcomeMessage implements Question<string> {
  
  // Criamos um método estático para ficar elegante no teste: 
  // actor.ask(WelcomeMessage.displayed())
  static displayed() {
    return new WelcomeMessage();
  }

  async answeredBy(actor: Actor): Promise<string> {
    // 1. Recuperamos a habilidade de navegar
    const browser = BrowseTheWeb.as(actor);

    // 2. Localizamos o elemento usando o método que criamos na Ability
    const element = await browser.locator(HomeElements.titleAdm);

    // 3. Extraímos o texto (WebdriverIO retorna uma Promise<string>)
    return await element.getText();
  
  }
}