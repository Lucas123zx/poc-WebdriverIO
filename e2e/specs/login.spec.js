import { expect as expectChai } from 'chai';
import { before, describe, it} from 'mocha';
import { User } from '../../support/util/util/User.js';
import RegisterActions from '../../support/actions/ui/RegisterActions.js';
import LoginActions from "../../support/actions/ui/LoginActions.js";
import HomeActions from '../../support/actions/ui/HomeActions.js';
import CommonActions from '../../support/actions/ui/CommonActions.js';

describe("Login", () => {

  const users = {
    admin: { name: "", email: "", password: "" },
    common: { name: "", email: "", password: "" }
  };

  
  before("Criar usuario Adm", async function() {
    RegisterActions.open();
    let user = User.createRandomUser();
    await CommonActions.registerUserAdm(user.name, user.email, user.password)
    const homeText = await HomeActions.getHomeAdmMenssage();
    expectChai(homeText).to.be.equal('Bem Vindo ' + user.name);
    users.admin = user;
  });

  before("Criar usuário comun" , async function() {
    RegisterActions.open();
    let user = User.createRandomUser();
    await CommonActions.registerUser(user.name, user.email, user.password);
    const homeText = await HomeActions.getTexto();
    expectChai(homeText).to.be.equal('Serverest Store');
    users.common = user;
  });

  it("Login user adm com sucesso", async function() {
    LoginActions.open('/login');
    await LoginActions.login(users.admin.email, users.admin.password);
    const homeText = await HomeActions.getHomeAdmMenssage();
    expectChai(homeText).to.be.equal('Bem Vindo ' + users.admin.name);
  });

  it("Login user com sucesso", async function() {
    LoginActions.open('/login');
    await LoginActions.login(users.common.email, users.common.password);
    const homeText = await HomeActions.getTexto();
    expectChai(homeText).to.be.equal('Serverest Store');
  });

})
