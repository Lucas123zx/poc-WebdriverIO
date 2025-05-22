import { $ } from '@wdio/globals';
import { BasePage } from './BasePage';
import UserRegistrationsElements from "../elements/UserRegistrationElements";

let userRegistrationsElements = new UserRegistrationsElements();

export class UserRegistrationPage extends BasePage {

  async visibleAlert(element: string) {
    await this.waitElementDisplayed(element);;
  }

  async getTextAlert(element: string) {
    await this.visibleAlert(`//span[contains(text(),'${element}')]`);
    return await $(`//span[contains(text(),'${element}')]`).getText();
  }
  
}