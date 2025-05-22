import { before, describe, it } from 'mocha';
import { Users } from '../../util/Users.js';
import GetUsersService from '../../support/services/GetUsersService.js';
import Actions from '../../util/Actions.js';
import { HomePage } from '../../support/pages/HomePage.js';
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
  let actions = new Actions();

  let user: Users;
  const requiredPasswordMsg = "Password é obrigatório";

  before('Login-in system with user admin', async () => {
    user = await GetUsersService.getUserAdm();
    loginPage.accessLoginPage();
    await loginPage.login(user.email, user.password);
  });

  it('Should register a user sucessfully', async () => {
    const newUser = new Users("userAdm"); 

    await homePage.clickRegisterUser();
    await registerPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let newUserData = await listUserPage.findUser(newUser.nome, newUser.email);
    expect(newUser.nome).toEqual(newUserData!.nome);

    await actions.screenshot();
  });

  it('Should be visible alert with text "Password é obrigatório" when registering a user', async () => {
    let newUser = new Users("user"); 

    newUser.password = '';
    
    await homePage.clickRegisterUser();
    await registerPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let alertError = await userRegistrationPage.getTextAlert(requiredPasswordMsg);
    expect(alertError).toEqual(requiredPasswordMsg); 
  });


  it('Should be visible alert with text "Email é obrigatório" when registering a user', async () => {
    let newUser = new Users("user"); 

    newUser.email = '';
    
    await homePage.clickRegisterUser();
    await registerPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let alertError = await userRegistrationPage.getTextAlert(requiredPasswordMsg);
    expect(alertError).toEqual(requiredPasswordMsg); 
  });


});