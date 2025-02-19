import { $ } from '@wdio/globals';

export default class HomePage {

  get title() {
    return $('h1')
  };

  get cards() { 
    return $('div[class="card"') 
  };

  get lead() {
    return $('p[class="lead"]')
  }
  
  get listProducts() {
    return $('section[class="row espacamento"]')
  };

  get navbar() { 
    return $('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]') 
  };

  get linkRegister() { 
    return $('a[data-testid="cadastrar-usuarios"]') 
  };

};

