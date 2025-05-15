import { expect as expectChai } from 'chai';
import { HomePage } from '../../pages/HomePage';
import { User } from '../../../models/Users'; 

let homePage = new HomePage();

export class HomeActions {

  async assertionTitleHomeAdm(user: User ) {
    const homeText = await homePage.getTitleHomeAdm();
    expectChai(homeText).to.be.equal("Bem Vindo "  + user.nome);
  }

  async assertionTitleHome() {
    const homeText = await homePage.getTitleHome();
    expectChai(homeText).to.be.equal("Serverest Store");
  }

}