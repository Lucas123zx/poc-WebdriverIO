import { $, $$ } from '@wdio/globals';
import HomeElements from './HomeElements';

export default class ListUsersElements extends HomeElements{

  public get title() {
    return $(HomeElements.prototype.title)
  };

  public get titleCollunList() {
    return $('thead tr th')
  };

  public get datasUser() {
    return $('td')
  };

  public get datasNames() {
    return $('td:nth-child(1)')
  };

  public get datasEmail() {
    return $('td:nth-child(2)')
  };

  public get datasPassword() {
    return $('td:nth-child(3)')
  };
  
  public get datasAdmin() {
    return $('td:nth-child(4)')
  };

  public get btnEdit() {
    return $('td')
  };

  public get btnDelete() {
    return $('td')
  };
  
  public get list() {
    return $$('tbody tr')
  };

}

