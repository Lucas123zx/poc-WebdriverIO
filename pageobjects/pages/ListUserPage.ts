import ListUsersElements from '../elements/ListUsersElements';
import { User } from '../../models/Users';

let listUsersElements = new ListUsersElements();

class ListUserPage {


 async waitListDisplayed() {
    await listUsersElements.datasUser.waitForDisplayed();
  };

  async findUser(nameUser: string, emailUser: string) {
    await this.waitListDisplayed();
    
    let elements = listUsersElements.list;
    let users = await elements.map(async (user) => {
      let namesUsersTexts = await user.$('td:nth-child(1)').getText();
      let emailsUsersTexts = await user.$('td:nth-child(2)').getText();
      let passwordsUsersTexts = await user.$('td:nth-child(3)').getText();
      let profileUsersTexts = await user.$('td:nth-child(4)').getText();

      if(namesUsersTexts === nameUser && emailsUsersTexts === emailUser) {
        let foundUser: User = {
          nome: namesUsersTexts,
          email: emailsUsersTexts,
          password: passwordsUsersTexts, 
          administrador: profileUsersTexts
        };      

        return foundUser;
      } else { 
        return null;
      }
    });

    return users.find(user => user !== null);
  };
 
}

export default new ListUserPage();