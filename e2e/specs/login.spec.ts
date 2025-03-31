import { expect as expectChai } from 'chai';
import { before, describe, it} from 'mocha';
import { User } from '../../models/Users.js';
import PostUserService from '../../pageobjects/actions/api/PostUserService.js';
import testData from '../../fixtures/api/post.fixture.js';
import LoginPage from '../../pageobjects/page/LoginPage.js';
import HomePage from '../../pageobjects/page/HomePage.js';
import BasePage from '../../pageobjects/page/base/BasePage.js';

describe('Login', () => {

  let admin: User; 
  let common: User; 

  
  before('Create user Adm', async function() {
    await PostUserService.createUser(testData.dataUserAdmin);
    admin = testData.dataUserAdmin;
  });

  before('Create user commun'  , async function() {
    await PostUserService.createUser(testData.dataUser);
    common = testData.dataUser;
  });

  it('Login user adm with sucess' , async function() {
    BasePage.open("/login");
    await LoginPage.login(admin.email, admin.password);
    const homeText = await HomePage.getTitleHomeAdm();
    expectChai(homeText).to.be.equal("Bem Vindo "  + admin.nome);
    await BasePage.screenshot();
  });

  it('Login user with sucess' , async function() {
    BasePage.open("/login");
    await LoginPage.login(common.email, common.password);
    const homeText = await HomePage.getTitleHome();
    expectChai(homeText).to.be.equal("Serverest Store");
    await BasePage.screenshot();
  });

  it('Login user with credential invalid' , async function() {
    BasePage.open("/login");
    await LoginPage.login(common.email, "@#");
    let msg = await LoginPage.getTextInvalid();
    expectChai(msg).to.be.equal("Email e/ou senha inválidos");
    await BasePage.screenshot();
  });

})
