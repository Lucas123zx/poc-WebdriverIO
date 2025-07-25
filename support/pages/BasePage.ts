import { browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';
export class BasePage {

  protected open(path: string) {
    if(path !== null) {
      return browser.url(`${process.env.BASE_URL}${path}`);
    }
  }

  protected getUrl() {
    return browser.getUrl();
  }

  protected async waitElementDisplayed(el: ChainablePromiseElement) {
    if(el !== null) {
      await el.waitForDisplayed();
    }
  }

  protected async getText(el: ChainablePromiseElement)  {
    this.waitElementDisplayed(el);
    if(el !== null) {
      return await el.getText();
    } 
  }

  protected async click(el: ChainablePromiseElement) {
    this.waitElementDisplayed(el);
    $(el).click();
  }

  protected async write(el: ChainablePromiseElement, text: string) {
    this.waitElementDisplayed(el);
    $(el).addValue(text); 
  }

  protected async clickElementEnable(el: ChainablePromiseElement) {
    this.waitElementDisplayed(el);
    $(el).isEnabled();
  }
  

}