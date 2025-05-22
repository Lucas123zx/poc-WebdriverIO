import ListUsersElements from '../elements/ListUsersElements';
import { User } from '../../models/Users';
import { BasePage } from './BasePage';

let listUsersElements = new ListUsersElements();
export class ListUserPage extends BasePage {

  async clickBtnEdit() {
    await this.waitElementDisplayed(listUsersElements.btnEdit);
    await listUsersElements.btnEdit.click();
  }

  async clickBtnDelte() {
    await this.waitElementDisplayed(listUsersElements.btnDelete);
    await listUsersElements.btnDelete.click();
  }

  async getTextCollunName() {
    await this.waitElementDisplayed(listUsersElements.datasNames);
    return await listUsersElements.datasNames.getText();
  }
  
  async getTextCollunEmail() {
    await this.waitElementDisplayed(listUsersElements.datasEmail);
    return await listUsersElements.datasEmail.getText();
  }

  async getTextCollunPassword() {
    await this.waitElementDisplayed(listUsersElements.datasPassword);
    return await listUsersElements.datasPassword.getText();
  }

  async getTextCollunAdm() {
    await this.waitElementDisplayed(listUsersElements.datasAdmin);
    return await listUsersElements.datasAdmin.getText();
  }

  async getListUsers() {
    await this.waitElementDisplayed(listUsersElements.datasUser);
    return await listUsersElements.list;
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
