import { before, describe, it} from 'mocha';
import PostUserService from '../../pageobjects/actions/api/PostUserService.js';
import { Users } from '../../pageobjects/util/Users';
import { LoginActions } from '../../pageobjects/actions/ui/LoginActions.js';
import { HomeActions } from '../../pageobjects/actions/ui/HomeActions.js';
import { BaseActions } from '../../pageobjects/actions/base/BaseAction.js';

describe('Login', () => {

  let loginActions = new LoginActions();
  let homeActions = new HomeActions();
  let baseActions = new BaseActions();

  const admin = new Users("userAdm"); 
  const common = new Users("user"); 
  
  before('Create user Adm',  async () => {
    await PostUserService.createUser(admin);
  });

  before('Create user commun'  ,  async () => {
    await PostUserService.createUser(common);
  });

  it('Should login user admin with sucess' ,  async () => {
    await loginActions.login(admin.email, admin.password);

    await homeActions.assertionTitleHomeAdm(admin);

    await baseActions.screenshot();
  });

  it('Should login user common with sucess' ,  async () => {
    await loginActions.login(common.email, common.password);

    await homeActions.assertionTitleHome();

    await baseActions.screenshot();
  });

  it('Login should fail for a user with invalid credentials' , async () => {
    await loginActions.login(common.email, "@#");
   
    await loginActions.assertionMsgFail("Email e/ou senha inválidos")
    
    await baseActions.screenshot();
  });

})
