import { browser } from '@wdio/globals';
import { currentTestTitle, curretSpecFile} from '../../../config/wdio.conf';

class BasePage {

  async screenshot() {
    let testTitle = currentTestTitle.replace(/\s+/g , '_');
    await browser.saveScreenshot(`./screenshots/${curretSpecFile}/${testTitle}.png`);
  };

  public open(path: string) {
    return browser.url(`${process.env.BASE_URL}${path}`);
  };

  public getUrl() {
    return browser.getUrl();
  }

 
}

export default new BasePage();