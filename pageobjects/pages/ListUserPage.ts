import ListUsersElements from '../elements/ListUsersElements';
import { User } from '../../models/Users';
import { BaseActions } from '../actions/base/BaseAction';

let baseAction = new BaseActions();
export class ListUserPage extends ListUsersElements {

  async clickBtnEdit() {
    await baseAction.waitElementDisplayed(this.btnEdit);
    await this.btnEdit.click();
  }

  async clickBtnDelte() {
    await baseAction.waitElementDisplayed(this.btnDelete);
    await this.btnDelete.click();
  }

  async getTextCollunName() {
    await baseAction.waitElementDisplayed(this.datasNames);
    return await this.datasNames.getText();
  }
  
  async getTextCollunEmail() {
    await baseAction.waitElementDisplayed(this.datasEmail);
    return await this.datasEmail.getText();
  }

  async getTextCollunPassword() {
    await baseAction.waitElementDisplayed(this.datasPassword);
    return await this.datasPassword.getText();
  }

  async getTextCollunAdm() {
    await baseAction.waitElementDisplayed(this.datasAdmin);
    return await this.datasAdmin.getText();
  }

  async getListUsers() {
    await baseAction.waitElementDisplayed(this.datasUser);
    return await this.list;
  }

  async findUser(nameUser: string, emailUser: string) {
      
    let elements = await this.getListUsers();
    
    for (let element of elements) {
      let namesUsersTexts = await element.$('td:nth-child(1)').getText();
      let emailsUsersTexts = await element.$('td:nth-child(2)').getText();
      let passwordsUsersTexts = await element.$('td:nth-child(3)').getText();
      let profileUsersTexts = await element.$('td:nth-child(4)').getText();

      if (namesUsersTexts === nameUser && emailsUsersTexts === emailUser) {

        let foundUser: User = {
        nome: namesUsersTexts,
        email: emailsUsersTexts,
        password: passwordsUsersTexts,
        administrador: profileUsersTexts
      };
        return foundUser;
      }
    }
  }

  
  
}
