import HomeElements from '../elements/HomeElements';
import { BasePage } from './BasePage';

let homeElements = new HomeElements();

export class HomePage extends BasePage {

  async getTitleHomeAdm() {
    await this.waitElementDisplayed(homeElements.cards);
    await this.getText(homeElements.title);
  }
  
  async getTitleHome() {
    await this.waitElementDisplayed(homeElements.listProducts);
    await this.getText(homeElements.title);
  }
  
  async clickRegisterUser() {
    await this.waitElementDisplayed(homeElements.linkRegister);
    await homeElements.linkRegister.click();
  }
  
}

