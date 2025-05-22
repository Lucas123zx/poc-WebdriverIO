import { before, describe, it} from 'mocha';
import { expect as expectChai } from 'chai';
import PostUserService from '../../support/services/PostUserService.js';
import { Users } from '../../util/Users';
import { LoginPage } from '../../support/pages/LoginPage.js';
import { HomePage } from '../../support/pages/HomePage.js';
import Actions  from '../../util/Actions.js'
describe('Login', () => {

  let loginPage = new LoginPage();
  let homePage= new HomePage();
  let actions = new Actions();

  const admin = new Users("userAdm"); 
  const common = new Users("user"); 
  
  before('Create user Adm',  async () => {
    await PostUserService.createUser(admin);
  });

  before('Create user commun'  ,  async () => {
    await PostUserService.createUser(common);
  });

  it('Should login user admin with sucess' ,  async () => {
    await loginPage.login(admin.email, admin.password);

    const homeText = await homePage.getTitleHomeAdm();
    expectChai(homeText).to.be.equal("Bem Vindo "  + admin.nome);

    await actions.screenshot();
  });

  it('Should login user common with sucess' ,  async () => {
    await loginPage.login(common.email, common.password);

    const homeText = await homePage.getTitleHome();
    expectChai(homeText).to.be.equal("Serverest Store");

    await actions.screenshot();
  });

  it('Login should fail for a user with invalid credentials' , async () => {
    await loginPage.login(common.email, "@#");
   
    let msg = await loginPage.getTextInvalid();
    expectChai(msg).to.be.equal("Email e/ou senha inválidos");

    await actions.screenshot();
  });

})
