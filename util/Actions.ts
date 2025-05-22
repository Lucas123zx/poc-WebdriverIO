import { browser } from '@wdio/globals';
import { currentTestTitle, currentSpecFile} from '../config/wdio.conf';
import { currentTestTitleHeadless, currentSpecFileHeadless} from '../config/wdio.conf.headless';

export default class Actions {

  async screenshot() {
    const isHeadless =  browser.capabilities['goog:chromeOptions']?.args?.includes('--headless');

    let testTitle;

    if(isHeadless === true) {
      testTitle = currentTestTitleHeadless.replace(/\s+/g , '_').replace(/"/g, "");
      await browser.saveScreenshot(`./screenshots/${currentSpecFileHeadless}/${testTitle}.png`);
    } else { 
      testTitle = currentTestTitle.replace(/\s+/g , '_').replace(/"/g, "");
      await browser.saveScreenshot(`./screenshots/${currentSpecFile}/${testTitle}.png`);
    }
  }

}