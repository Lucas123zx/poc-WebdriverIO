import { BaseSteps } from '../util/BaseSteps.js';
import { User } from '../util/User.js';
import { expect as expectChai } from 'chai';
import RegisterPage from "../pages/RegisterPage.js";
import LoginPage from "../pages/LoginPage.js";
import HomePage from '../pages/HomePage.js';

describe("Login", () => {

  let users = [];

  before("Criar usuario Adm", async () => {
    await RegisterPage.open();
    let user = User.createRandomUser();
    await RegisterPage.registerUserAdm(user.name, user.email, user.password)
    const homeText = await HomePage.getTextoHome();
    expectChai(homeText).to.eql('Bem Vindo ' + user.name);
    users.push(user);
  });

  before("Criar usuário comun" , async () => {
    await RegisterPage.open();
    let user = User.createRandomUser();
    await RegisterPage.registerUser(user.name, user.email, user.password);
    const homeText = await HomePage.getTextoHome();
    expectChai(homeText).to.eql('Serverest Store');
    users.push(user);
  })

  it.only("Login user adm com sucesso", async () => {
    LoginPage.open();
    await LoginPage.login(users[0].email, users[0].password);
    const homeText = await HomePage.getTextoHome();
    expectChai(homeText).to.eql('Bem Vindo ' + users[0].name);
    await BaseSteps.validarSeEstouNaUrl('https://front.serverest.dev/admin/home');
  });

  it("Login user com sucesso", async () => {
    LoginPage.open();
    await LoginPage.login(users[1].email, users[1].password);
    const homeText = await HomePage.getTextoHome();
    expectChai(homeText).to.eql('Serverest Store');
    await BaseSteps.validarSeEstouNaUrl('https://front.serverest.dev/home');
  });

})
