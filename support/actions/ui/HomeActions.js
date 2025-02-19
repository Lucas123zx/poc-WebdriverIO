import HomePage from "../../pages/HomePage";

class HomeActions extends HomePage {

  async getTexto() {
    let text = this.title.getText();
    return text;
  };

  async getTitleHomeAdm() {
    await this.cards.waitForDisplayed();
    return await this.getTexto();
  };
  
  async getTitleHome() {
    await this.listProducts.waitForDisplayed();
    return await this.getTexto();
  };
  
  async clickRegisterUser() {
    await this.linkRegister.click();
  };
  
}

export default new HomeActions();