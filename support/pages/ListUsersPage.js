import { $ } from '@wdio/globals';
import HomePage from './HomePage';

export default class ListUsersPage {

  get title() {
    return $(HomePage.title)
  }

}

