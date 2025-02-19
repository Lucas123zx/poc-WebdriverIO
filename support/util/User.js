import { faker } from '@faker-js/faker';
import 'dotenv/config';

export class User {
  
  constructor() {
    this.name = this.#genName();
    this.email = this.#genEmail(this.name);
    this.password = this.#genPassword();
  }

  #genName() {
    let name = faker.person.fullName();
    return name;
  };

  #genEmail(name) {
    const email = name.toLowerCase().replace(/\s+/g, '-') + "@tuamaeaquelaursa.com";
    return email;
  };

  #genPassword() {
    let password = process.env.PASSWORD_USER;;
    return password;
  };

  static createRandomUser() { 
    return new User();
  }


}