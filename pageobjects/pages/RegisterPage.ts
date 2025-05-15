import { $ } from '@wdio/globals';
import RegisterElements  from '../elements/RegisterElements';
import CommonElements from '../elements/CommonElements';
import { BaseActions } from '../actions/base/BaseAction';

let commonElements = new CommonElements();
let baseActions = new BaseActions();

export class RegisterPage extends RegisterElements {

  async clickBtnRegister() {
    await baseActions.waitElementDisplayed(commonElements.btnRegister);
    await commonElements.btnRegister.click();
  }

  async getMsgSucess() {
    await baseActions.waitElementDisplayed(this.msgSuccess);
    await baseActions.getText(this.msgSuccess);
  }

  async getMsgFail(element: string) {
    await baseActions.waitElementDisplayed(`//span[contains(text(),'${element}')]`);
    await baseActions.getText(`//span[contains(text(),'${element}')]`);
  }

}