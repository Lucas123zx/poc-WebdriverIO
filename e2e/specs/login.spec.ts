import { expect as expectChai } from 'chai';
import { before, describe, it} from 'mocha';
import { User } from '../../pageobjects/util/User.js';
import RegisterActions from '../../pageobjects/actions/ui/RegisterActions.js';
import LoginActions from "../../pageobjects/actions/ui/LoginActions.js";
import HomeActions from '../../pageobjects/actions/ui/HomeActions.js';
import CommonActions from '../../pageobjects/actions/ui/CommonActions.js';
import BaseUI from '../../pageobjects/actions/base/BaseUI.js';

describe("Login", () => {

  let admin: any; 
  let common: any; 

  
  before("Create user Adm", async function() {
    BaseUI.open('/cadastrarusuarios');
    let user = User.createRandomUser();
    await CommonActions.registerUserAdm(user.getName(), user.getEmail(), user.getPasswrod())
    const homeText = await HomeActions.getTitleHomeAdm();
    expectChai(homeText).to.be.equal('Bem Vindo ' + user.getName());
    admin = {name: user.getName(), email: user.getEmail(), password: user.getPasswrod()};
  });

  before("Create user commun" , async function() {
    BaseUI.open('/cadastrarusuarios');
    let user = User.createRandomUser();
    await CommonActions.registerUser(user.getName(), user.getEmail(), user.getPasswrod());
    const homeText = await HomeActions.getTitleHome();
    expectChai(homeText).to.be.equal('Serverest Store');
    common = {name: user.getName(), email: user.getEmail(), password: user.getPasswrod()};
    console.log("Aq Estou eu" + common.name)
  });

  it("Login user adm with sucess", async function() {
    BaseUI.open('/login');
    await LoginActions.login(admin.email, admin.password);
    const homeText = await HomeActions.getTitleHomeAdm();
    expectChai(homeText).to.be.equal('Bem Vindo ' + admin.name);
    await BaseUI.screenshot();
  });

  it("Login user with sucess", async function() {
    BaseUI.open('/login');
    await LoginActions.login(common.email, common.password);
    const homeText = await HomeActions.getTitleHome();
    expectChai(homeText).to.be.equal('Serverest Store');
    await BaseUI.screenshot();
  });

  it("Login user with credential invalid", async function() {
    BaseUI.open('/login');
    await LoginActions.login(common.email, '@#' );
    let msg = await LoginActions.getTextInvalid();
    expectChai(msg).to.be.equal('Email e/ou senha inválidos');
    await BaseUI.screenshot();
  });

})
