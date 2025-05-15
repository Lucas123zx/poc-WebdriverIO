import { before, describe, it } from 'mocha';
import { Users } from '../../pageobjects/util/Users.js';
import { User } from '../../models/Users.js';
import GetUsersService from '../../pageobjects/actions/api/GetUsersService.js';
import CommonPage from '../../pageobjects/pages/CommonPage.js';
import HomePage from '../../pageobjects/pages/HomePage.js';
import LoginPage from '../../pageobjects/pages/LoginPage.js';
import BasePage from '../../pageobjects/actions/base/BaseAction.js';
import ListUserPage from '../../pageobjects/pages/ListUserPage.js';
import UserRegistrationPage from '../../pageobjects/pages/UserRegistrationPage.js';
import { expect } from 'expect-webdriverio';

describe('Register new user in profile admin', () => {

  let user: User;
  const requiredPasswordMsg = "Password é obrigatório";

  before('Login-in system with user admin', async () => {
    user = await GetUsersService.getUserAdm();
    BasePage.open("/login");
    await LoginPage.login(user.email, user.password);
  });

  it('Should register a user sucessfully', async () => {
    const newUser = new Users("userAdm"); 

    await HomePage.clickRegisterUser();
    await CommonPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let newUserData = await ListUserPage.findUser(newUser.nome, newUser.email);
    expect(newUser.nome).toEqual(newUserData!.nome);

    await BasePage.screenshot();
  });

  it('Should be visible alert with text "Password é obrigatório" when registering a user', async () => {
    let newUser = new Users("user"); 

    newUser.password = '';
    
    await HomePage.clickRegisterUser();
    await CommonPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let alertError = await UserRegistrationPage.getTextAlert(requiredPasswordMsg);
    expect(alertError).toEqual(requiredPasswordMsg); 
  });


  it('Should be visible alert with text "Email é obrigatório" when registering a user', async () => {
    let newUser = new Users("user"); 

    newUser.email = '';
    
    await HomePage.clickRegisterUser();
    await CommonPage.registerUser(newUser.nome, newUser.email, newUser.password);

    let alertError = await UserRegistrationPage.getTextAlert(requiredPasswordMsg);
    expect(alertError).toEqual(requiredPasswordMsg); 
  });


});