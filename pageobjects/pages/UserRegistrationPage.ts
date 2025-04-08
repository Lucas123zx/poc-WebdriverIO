import { $ } from '@wdio/globals';
import UserRegistrationsElements from "../elements/UserRegistrationElements";

class UserRegistrationPage extends UserRegistrationsElements {

  async visibleAlert(element: string) {
    await $(element).waitForDisplayed();
  };

  async getTextAlert(element: string) {
    await this.visibleAlert(`//span[contains(text(),'${element}')]`);
    return await $(`//span[contains(text(),'${element}')]`).getText();
  };
  

}

export default new UserRegistrationPage();