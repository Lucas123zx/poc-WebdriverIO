import { RegisterPage } from '../../pages/RegisterPage';
import { CommonPage } from '../../pages/CommonPage';

let commonPage = new CommonPage();

export class RegisterActions {

   async registerUser(name: string, email: string, password: string) {
    await commonPage.writeName(name);
    await commonPage.writeEmail(email);
    await commonPage.writePassword(password);
    await commonPage.clickBtnRegister();
  }

  async registerUserAdm(name: string, email: string, password: string) {
    await commonPage.writeName(name);
    await commonPage.writeEmail(email);
    await commonPage.writePassword(password);
    await commonPage.clickBtnAdm();
    await commonPage.clickBtnRegister();
  }
 

}