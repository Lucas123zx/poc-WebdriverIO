import { before, describe, it} from 'mocha';
import { expect as expectChai } from 'chai';
import screenshot from '../../util/actions.js';
import PostUserService from '../../support/services/PostUserService.js';
import { Users } from '../../util/Users.js';
import { LoginPage } from '../../support/pages/LoginPage.js';
import { HomePage } from '../../support/pages/HomePage.js';

describe('Login', () => {

  let loginPage = new LoginPage();
  let homePage= new HomePage();

  const admin = new Users("userAdm"); 
  const common = new Users("user"); 
  
  before('Create user Adm',  async () => {
    await PostUserService.createUser(admin);
  });

  before('Create user commun'  ,  async () => {
    await PostUserService.createUser(common);
  });

  it('[CT01] - Deve realizar login no perfil adm com sucesso' ,  async () => {
    await loginPage.login(admin.email, admin.password);

    const homeText = await homePage.getTitleHomeAdm();
    const subTitleText = await homePage.getSubtitleHomeAdm();
    expectChai(homeText).to.be.equal("Bem Vindo "  + admin.nome);
    expectChai(subTitleText).to.be.equal("Este é seu sistema para administrar seu ecommerce.");

    await screenshot();
  });

  it('[CT02] - Deve realizar Login no perfil cliente com sucesso' ,  async () => {
    await loginPage.login(common.email, common.password);

    const homeText = await homePage.getTitleHome();
    expectChai(homeText).to.be.equal("Serverest Store");

    await screenshot();
  });

  it('[CT03] - Deve realizar login com campo "email" vazio' , async () => {
    await loginPage.login('', common.password);
   
    let msg = await loginPage.getTextInvalid();
    expectChai(msg).to.be.equal("Email e/ou senha inválidos");

    await screenshot();
  });

  it('[CT04] - Deve realizar o login com campo "senha" vazio' , async () => {
    await loginPage.login(common.email, '');
   
    let msg = await loginPage.getTextInvalid();
    expectChai(msg).to.be.equal("Email e/ou senha inválidos");

    await screenshot();
  });

})
