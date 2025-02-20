import { before, describe, it } from "mocha";
import { User } from '../../pageobjects/util/User.js';
import GetUsersService from "../../pageobjects/actions/api/GetUsersService..js";
import CommonActions from "../../pageobjects/actions/ui/CommonActions.js";
import HomeActions from "../../pageobjects/actions/ui/HomeActions.js";
import LoginActions from "../../pageobjects/actions/ui/LoginActions.js";
import BaseUI from "../../pageobjects/actions/base/BaseUI.js";

describe("Register user in profile admin", () => {

  let user: any;

  before("Login-in System with user admin", async () => {
    user = await GetUsersService.getUserAdm();
    BaseUI.open('/login');
    await LoginActions.login(user.email, user.password);
  });

  it.only('register user sucess', async () => {
    let newUser = User.createRandomUser();
    await HomeActions.clickRegisterUser();
    await CommonActions.registerUser(newUser.getName(), newUser.getEmail(), newUser.getPasswrod());
    await BaseUI.screenshot();
  });

});