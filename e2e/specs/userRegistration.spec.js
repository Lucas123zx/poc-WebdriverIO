import { before, describe, it } from "mocha";
import { User } from '../../support/util/User.js';
import GetUsersService from "../../support/actions/api/GetUsersService..js";
import CommonActions from "../../support/actions/ui/CommonActions.js";
import HomeActions from "../../support/actions/ui/HomeActions.js";
import LoginActions from "../../support/actions/ui/LoginActions.js";
import BaseUI from "../../support/actions/base/BaseUI.js";

describe("Register user in profile admin", () => {

  let user;

  before("Login-in System with user admin", async () => {
    user = await GetUsersService.getUserAdm();
    LoginActions.visitUrl();
    await LoginActions.login(user.email, user.password);
  });

  it('register user sucess', async () => {
    let newUser = User.createRandomUser();
    await HomeActions.clickRegisterUser();
    await CommonActions.registerUser(newUser.name, newUser.email, newUser.password);
    await BaseUI.screenshot();
  });

});