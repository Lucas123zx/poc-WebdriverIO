import RegisterElements  from '../elements/RegisterElements';
import Common from '../elements/common/CommonElements';

const registerElements = new RegisterElements();
const commonElements = new Common();

class RegisterPage  {

  async clickBtnRegister() {
    await commonElements.btnRegister.click();
  };

  async getMsgSucess() {
    await registerElements.msgSuccess.isDisplayed();
    const msgSucess = await registerElements.msgSuccess.getText();
    return msgSucess;
  };

  async getMsgFail(texto: string) {
    registerElements.msgFail(texto).isDisplayed();
    const msgFail = await registerElements.msgFail(texto).getText();
    return msgFail;
  };


}

export default new RegisterPage();