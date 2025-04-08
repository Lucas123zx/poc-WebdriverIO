import { $ } from '@wdio/globals';

export default class HomeElements {

  public get title() {
    return $('h1');
  };

  public get cards() { 
    return $('div[class="card"');
  };

  public get lead() {
    return $('p[class="lead"]');
  };
  
  public get listProducts() {
    return $('section[class="row espacamento"]');
  };

  public get navbar() { 
    return $('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]');
  };

  public get linkRegister() { 
    return $('a[data-testid="cadastrar-usuarios"]');
  };

};

