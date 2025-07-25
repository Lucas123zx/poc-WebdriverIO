import { before, describe, it } from 'mocha';
import { Users } from '../../util/Users.js';
import GetUsersService from '../../support/services/GetUsersService.js';
import { HomePage } from '../../support/pages/HomePage.js';
import screenshot from '../../util/actions.js'
import { LoginPage } from '../../support/pages/LoginPage.js';
import { ListUserPage }  from '../../support/pages/ListUserPage.js';
import { RegisterPage } from '../../support/pages/RegisterPage.js';
import { UserRegistrationPage } from '../../support/pages/UserRegistrationPage.js'

describe('Register new user in profile admin', () => {

  let homePage = new HomePage();
  let loginPage = new LoginPage();
  let listUserPage = new ListUserPage();
  let registerPage = new RegisterPage();
  let userRegistrationPage = new UserRegistrationPage();

  let user: Users;
  const requiredPasswordMsg = "Password é obrigatório";
  const requiredEmailMsg = "Email é obrigatório";
  const requiredNameMsg = "Nome é obrigatório";

  before('Login-in system with user admin', async () => {
    user = await GetUsersService.getUserAdm();
    loginPage.accessLoginPage();
    await loginPage.login(user.email, user.password);
    await homePage.clickRegisterUser();
  });

  it('Should register a user sucessfully', async () => {
    const newUser = new Users("userAdm"); 

    await registerPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let newUserData = await listUserPage.findUser(newUser.nome, newUser.email);
    expect(newUser.nome).toEqual(newUserData!.nome);

    await screenshot();
  });

  it('Should be visible alert with text "Password é obrigatório" when registering a user', async () => {
    let newUser = new Users("user"); 

    newUser.password = '';
    
    await registerPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let alertError = await userRegistrationPage.getTextAlert(requiredPasswordMsg);
    expect(alertError).toEqual(requiredPasswordMsg); 
  });


  it('Should be visible alert with text "Email é obrigatório" when registering a user', async () => {
    let newUser = new Users("user"); 

    newUser.email = '';
    
    await registerPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let alertError = await userRegistrationPage.getTextAlert(requiredEmailMsg);
    expect(alertError).toEqual(requiredEmailMsg); 
  });

   it('Should be visible alert with text "Nome é obrigatório" when registering a user', async () => {
    let newUser = new Users("user"); 

    newUser.nome = '';
    
    await registerPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let alertError = await userRegistrationPage.getTextAlert(requiredNameMsg);
    expect(alertError).toEqual(requiredNameMsg); 
  });

  it('Should be visible alert with texts "Email é orbigatório", "Nome é obrigatório", "Password é obrigatório", when registering a user', async () => {
    
    await registerPage.clickBtnRegister();

    expect(userRegistrationPage.getTextAlert(requiredPasswordMsg)).toEqual(requiredPasswordMsg); 
    expect(userRegistrationPage.getTextAlert(requiredEmailMsg)).toEqual(requiredEmailMsg); 
    expect(userRegistrationPage.getTextAlert(requiredNameMsg)).toEqual(requiredNameMsg); 

  });


});