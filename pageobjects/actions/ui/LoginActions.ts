import { expect as expectChai } from 'chai';
import { LoginPage } from '../../pages/LoginPage';
import { BaseActions } from '../base/BaseAction';

let loginPage = new LoginPage();
let baseAction = new BaseActions();

export class LoginActions {

  async login (email: string, password: string) {
    await baseAction.open('/login') 
    await loginPage.writeInputEmail(email);
    await loginPage.writeInputPassword(password)
    await loginPage.clickBtnLogin();
  }

  async assertionMsgFail(text: string) {
    let msg = await loginPage.getTextInvalid();
    expectChai(msg).to.be.equal(text);
  }

}