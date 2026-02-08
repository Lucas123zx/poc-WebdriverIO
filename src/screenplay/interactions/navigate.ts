// src/screenplay/interactions/Navigate.ts
import { Actor, Task } from '../core/interfaces';
import { BrowseTheWeb } from '../abilities/browse-the-web';

export class Navigate implements Task {
  private url; 
  
  constructor(url: string) {
    this.url = url;
  }

  static to(url: string) {
    return new Navigate(url);
  }

  async performAs(actor: Actor): Promise<void> {
    // Aqui usamos o método que criamos na nossa Ability
    await BrowseTheWeb.as(actor).navigateTo(this.url);
  }
}