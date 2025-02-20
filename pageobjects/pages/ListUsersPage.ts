import { $ } from '@wdio/globals';
import HomePage from './HomePage';

export default class ListUsersPage extends HomePage{

  public get title() {
    return $(HomePage.prototype.title)
  }

}

