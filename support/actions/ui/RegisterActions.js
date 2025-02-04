import { Browser } from "../../browser/Browser";
import RegisterPage  from "../../pages/RegisterPage";
import Common from "../../pages/common/Common";

const registerPage = new RegisterPage();
const commonPage = new Common();
class RegisterActions extends Browser {

  async clickBtnRegister() {
    await commonPage.btnRegister.click();
  };

  async getMsgSucess() {
    await registerPage.msgSuccess.isDisplayed();
    const msgSucess = await this.msgSuccess.getText();
    return msgSucess;
  };

  async getMsgFail(texto) {
    registerPage.msgFail(texto).isDisplayed();
    const msgFail = await registerPage.msgFail(texto).getText();
    return msgFail;
  };

  async open() {
    return await super.open('cadastrarusuarios');
  };

}

export default new RegisterActions();