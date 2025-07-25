import HomeElements from '../elements/HomeElements';
import { BasePage } from './BasePage';

let homeElements = new HomeElements();

export class HomePage extends BasePage {

  async getTitleHomeAdm() {
    await this.waitElementDisplayed(homeElements.cards);
    return await this.getText(homeElements.titleAdm);
  }

  async getSubtitleHomeAdm() {
    await this.waitElementDisplayed(homeElements.cards);
    return await this.getText(homeElements.subTitle);
  }
  
  async getTitleHome() {
    await this.waitElementDisplayed(homeElements.listProducts);
    return await this.getText(homeElements.title);
  }
  
  async clickRegisterUser() {
    await this.waitElementDisplayed(homeElements.linkRegister);
    await homeElements.linkRegister.click();
  }
  
}

