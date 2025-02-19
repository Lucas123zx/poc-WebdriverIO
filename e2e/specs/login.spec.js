import { expect as expectChai } from 'chai';
import { before, describe, it} from 'mocha';
import { User } from '../../support/util/User.js';
import RegisterActions from '../../support/actions/ui/RegisterActions.js';
import LoginActions from "../../support/actions/ui/LoginActions.js";
import HomeActions from '../../support/actions/ui/HomeActions.js';
import CommonActions from '../../support/actions/ui/CommonActions.js';
import BaseUI from '../../support/actions/base/BaseUI.js';

describe("Login", () => {

  const users = {
    admin: { name: "", email: "", password: "" },
    common: { name: "", email: "", password: "" }
  };

  
  before("Create user Adm", async function() {
    RegisterActions.open();
    let user = User.createRandomUser();
    await CommonActions.registerUserAdm(user.name, user.email, user.password)
    const homeText = await HomeActions.getTitleHomeAdm();
    expectChai(homeText).to.be.equal('Bem Vindo ' + user.name);
    users.admin = user;
  });

  before("Create user commun" , async function() {
    RegisterActions.open();
    let user = User.createRandomUser();
    await CommonActions.registerUser(user.name, user.email, user.password);
    const homeText = await HomeActions.getTitleHome();
    expectChai(homeText).to.be.equal('Serverest Store');
    users.common = user;
  });

  it("Login user adm with sucess", async function() {
    LoginActions.open('/login');
    await LoginActions.login(users.admin.email, users.admin.password);
    const homeText = await HomeActions.getTitleHomeAdm();
    expectChai(homeText).to.be.equal('Bem Vindo ' + users.admin.name);
    await BaseUI.screenshot();
  });

  it("Login user with sucess", async function() {
    LoginActions.open('/login');
    await LoginActions.login(users.common.email, users.common.password);
    const homeText = await HomeActions.getTitleHome();
    expectChai(homeText).to.be.equal('Serverest Store');
    await BaseUI.screenshot();
  });

  it("Login user with credential invalid", async function() {
    LoginActions.open('/login');
    await LoginActions.login(users.common.email, '@#' );
    let msg = await LoginActions.getTextInvalid();
    expectChai(msg).to.be.equal('Email e/ou senha inválidos');
    await BaseUI.screenshot();
  });

})
