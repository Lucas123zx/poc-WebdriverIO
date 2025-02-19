import { browser } from '@wdio/globals';
import { currentTestTitle, curretSpecFile} from '../../../config/wdio.conf';

class BaseUI {

  async screenshot() {
    let testTitle = currentTestTitle.replace(/\s+/g , '_');
    await browser.saveScreenshot(`./screenshots/${curretSpecFile}/${testTitle}.png`);
  }

  
}

export default new BaseUI();