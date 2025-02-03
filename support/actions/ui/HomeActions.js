import HomePage from "../../pages/HomePage";

class HomeActions extends HomePage {

  async getTexto() {
    let text = this.title.getText();
    return text;
  };

  async getHomeAdmMenssage() {
    await this.cards.isDisplayed();
    return await this.getTexto();
  };

  async clickRegisterUser() {
    await this.linkRegister.click();
  }
  
}

export default new HomeActions();