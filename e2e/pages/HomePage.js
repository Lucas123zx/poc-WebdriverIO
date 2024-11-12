import { $ } from '@wdio/globals';

class HomePage {

  get titleHome() {return $("h1")}; 
 
  async getTextoHome() {
    await this.titleHome.waitForExist();
    return await this.titleHome.getText();
  };

}

export default new HomePage();

