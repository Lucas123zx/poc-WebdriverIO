import RegisterPage  from "../../pages/RegisterPage";
import Common from "../../pages/common/Common";

const registerPage = new RegisterPage();
const commonPage = new Common();

class RegisterActions  {

  async clickBtnRegister() {
    await commonPage.btnRegister.click();
  };

  async getMsgSucess() {
    await registerPage.msgSuccess.isDisplayed();
    const msgSucess = await registerPage.msgSuccess.getText();
    return msgSucess;
  };

  async getMsgFail(texto) {
    registerPage.msgFail(texto).isDisplayed();
    const msgFail = await registerPage.msgFail(texto).getText();
    return msgFail;
  };


}

export default new RegisterActions();