import { browser } from '@wdio/globals';

export class BasePage {

  protected open(path: string) {
    return browser.url(`${process.env.BASE_URL}${path}`);
  }

  protected getUrl() {
    return browser.getUrl();
  }

  protected async getText(element: ChainablePromiseElement) {
    return await element.getText();
  }

  protected async waitElementDisplayed(element: ChainablePromiseElement) {
    await element.waitForDisplayed();
  }
}