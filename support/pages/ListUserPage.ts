import ListUsersElements from '../elements/ListUsersElements';
import { User } from '../../models/Users';
import { BasePage } from './BasePage';

export class ListUserPage extends BasePage {
  private listUsersElements;

  constructor() {
    super();
    this.listUsersElements = new ListUsersElements();
  }

  async clickBtnEdit() {
    await this.waitElementDisplayed(this.listUsersElements.btnEdit);
    await this.click(this.listUsersElements.btnEdit);
  }

  async clickBtnDelte() {
    await this.waitElementDisplayed(this.listUsersElements.btnDelete);
    await this.click(this.listUsersElements.btnDelete);
  }

  async getTextUserName() {
    await this.waitElementDisplayed(this.listUsersElements.datasNames);
    return await this.getText(this.listUsersElements.datasNames);
  }
  
  async getTextUserEmail() {
    await this.waitElementDisplayed(this.listUsersElements.datasEmail);
    return await this.getText(this.listUsersElements.datasEmail);
  }

  async getTextUserPassword() {
    await this.waitElementDisplayed(this.listUsersElements.datasPassword);
    return await this.getText(this.listUsersElements.datasPassword);
  }

  async getTextUserProfise() {
    await this.waitElementDisplayed(this.listUsersElements.datasAdmin);
    return await this.getText(this.listUsersElements.datasAdmin);
  }

  async getListUsers() {
    return await this.listUsersElements.list;
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
