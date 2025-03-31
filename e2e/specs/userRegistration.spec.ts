import { before, describe, it } from 'mocha';
import { expect as expectChai } from 'chai';
import { Users } from '../../pageobjects/util/Users.js';
import GetUsersService from '../../pageobjects/actions/api/GetUsersService.js';
import CommonPage from '../../pageobjects/page/CommonPage.js';
import HomePage from '../../pageobjects/page/HomePage.js';
import LoginPage from '../../pageobjects/page/LoginPage.js';
import BasePage from '../../pageobjects/page/base/BasePage.js';
import ListUserPage from '../../pageobjects/page/ListUserPage.js'
import { User } from '../../models/Users.js';

describe('Register user in profile admin', () => {

  let user: User;

  before('Login-in system with user admin', async () => {
    user = await GetUsersService.getUserAdm();
    BasePage.open("/login");
    await LoginPage.login(user.email, user.password);
  });

  it('register user sucess', async () => {
    let newUser = new Users("false"); 
    await HomePage.clickRegisterUser();
    await CommonPage.registerUser(newUser.nome, newUser.email, newUser.password);
    let newUserData = await ListUserPage.findUser(newUser.nome, newUser.email);
    expect(newUser.nome).toEqual(newUserData?.nome);
    await BasePage.screenshot();
  });

});