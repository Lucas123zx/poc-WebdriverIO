import { expect as expectChai } from 'chai';
import { before, describe, it} from 'mocha';
import { User } from '../util/User.js';
import { BaseSteps } from '../util/BaseSteps.js';
import RegisterPage from "../pages/RegisterPage.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from '../pages/HomePage.js';

describe("Login", () => {

  const users = {
    admin: { name: "", email: "", password: "" },
    common: { name: "", email: "", password: "" }
  };

  before("Criar usuario Adm", async () => {
    await RegisterPage.open();
    let user = User.createRandomUser();
    await RegisterPage.registerUserAdm(user.name, user.email, user.password)
    const homeText = await HomePage.getTextoHome();
    expectChai(homeText).to.eql('Bem Vindo ' + user.name);
    users.admin = user;
  });

  before("Criar usuário comun" , async () => {
    await RegisterPage.open();
    let user = User.createRandomUser();
    await RegisterPage.registerUser(user.name, user.email, user.password);
    const homeText = await HomePage.getTextoHome();
    expectChai(homeText).to.eql('Serverest Store');
    users.common = user;
  });

  it("Login user adm com sucesso", async () => {
    LoginPage.open();
    await LoginPage.login(users.admin.email, users.admin.password);
    const homeText = await HomePage.getTextoHome();
    expectChai(homeText).to.eql('Bem Vindo ' + users.admin.name);
    await BaseSteps.validarSeEstouNaUrl('https://front.serverest.dev/admin/home');
  });

  it("Login user com sucesso", async () => {
    LoginPage.open();
    await LoginPage.login(users.common.email, users.common.password);
    const homeText = await HomePage.getTextoHome();
    expectChai(homeText).to.eql('Serverest Store');
    await BaseSteps.validarSeEstouNaUrl('https://front.serverest.dev/home');
  });

})
