import { faker } from '@faker-js/faker';

export class User {
  
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static createRandomUser() {
    const name = faker.person.fullName();
    const email = faker.string.uuid() + "@ZXatch.com";
    const password = "12314";
    return new User(name, email, password);
  }


}