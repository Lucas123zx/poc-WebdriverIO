import { faker } from '@faker-js/faker';
import 'dotenv/config';

export class User {
  private name: String;
  private email: String;
  private password: String;
  
  constructor() {
    this.name = this.genName();  
    this.email = this.genEmail(this.name);
    this.password = this.genPassword(); 
    
  };

  private genName(): String {
    return faker.person.fullName();
  };

  private genEmail(name: String): String {
    return `${name.toLowerCase().replace(/\s+/g, '-')}-teste@tuamaeaquelaursa.com`;
  };

  private genPassword(): String {
    return process.env.PASSWORD_USER;
  };

  public getName(): String {
    return this.name;
  };

  public getEmail(): String {
    return this.email;
  };

  public getPasswrod(): String {
    return this.password;
  };

  static createRandomUser(): User { 
    return new User();
  };

}