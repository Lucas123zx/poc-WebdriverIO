import HomeElements from '../elements/HomeElements';
import { BaseActions } from '../actions/base/BaseAction';

let baseActions = new BaseActions();

export class HomePage extends HomeElements {

  async getTitleHomeAdm() {
    await baseActions.waitElementDisplayed(this.cards);
    await baseActions.getText(this.title);
  }
  
  async getTitleHome() {
    await baseActions.waitElementDisplayed(this.listProducts);
    await baseActions.getText(this.title);
  }
  
  async clickRegisterUser() {
    await baseActions.waitElementDisplayed(this.linkRegister);
    await this.linkRegister.click();
  }
  
}

