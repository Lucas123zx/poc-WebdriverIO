import { $ } from '@wdio/globals';
import RegisterElements  from '../elements/RegisterElements';
import Common from '../elements/common/CommonElements';

const registerElements = new RegisterElements();
const commonElements = new Common();

class RegisterPage  {

  async clickBtnRegister() {
    await commonElements.btnRegister.click();
  }

  async getMsgSucess() {
    await registerElements.msgSuccess.isDisplayed();
    const msgSucess = await registerElements.msgSuccess.getText();
    return msgSucess;
  }

  async getMsgFail(element: string) {
    $(`//span[text()="${element}"]`).waitForDisplayed();
    const msgFail = $(`//span[text()="${element}"]`).getText();
    return msgFail;
  }

}

export default new RegisterPage();