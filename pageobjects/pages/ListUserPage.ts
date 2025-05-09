import ListUsersElements from '../elements/ListUsersElements';
import { User } from '../../models/Users';

let listUsersElements = new ListUsersElements();

class ListUserPage {

 async waitListDisplayed() {
    await listUsersElements.datasUser.waitForDisplayed();
  }

  async findUser(nameUser: string, emailUser: string) {
    await this.waitListDisplayed();
      
    let elements = await listUsersElements.list;
    
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
export default new ListUserPage();