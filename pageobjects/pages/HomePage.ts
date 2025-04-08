import HomeElements from '../elements/HomeElements';
import BasePage from './base/BasePage';

class HomePage extends HomeElements {

  async getTitleHomeAdm() {
    await this.cards.waitForDisplayed();
    return await BasePage.getText(await this.title);
  };
  
  async getTitleHome() {
    await this.listProducts.waitForDisplayed();
    return await BasePage.getText(await this.title);
  };
  
  async clickRegisterUser() {
    await this.linkRegister.click();
  };
  
}

export default new HomePage();