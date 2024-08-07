import { HomeElements } from "../components/homeElements.js";
import { $ } from '@wdio/globals';

const homeElements = new HomeElements();

class HomePage {

  get textHome() {return $(homeElements.title)}; 
 
  async getTextoHome() {
    return await this.textHome.getText();
  };

  
}
export default new HomePage();

