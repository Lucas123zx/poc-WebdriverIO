import { User } from '../models/Users'; 
import { faker } from '@faker-js/faker';
import 'dotenv/config';

export class Users implements User {
  public nome: string;
  public email: string;
  public password: string;
  public administrador: string;

  constructor(profile: string) {
    this.nome = this.genName();  
    this.email = this.genEmail(this.nome);
    this.password = this.genPassword(); 
    this.administrador = profile === "userAdm" ? "true" : "false"; 
  }

  private genName() {
    return faker.person.fullName();
  }

  private genEmail(name: string): string {
    return `${name.toLowerCase().replace(/\s+/g, '-')}-teste@tuamaeaquelaursa.com`;
  }

  private genPassword(): string {
    return String(process.env.PASSWORD_USER);
  }
}