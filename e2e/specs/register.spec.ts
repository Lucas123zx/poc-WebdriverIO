import {expect as expectChai} from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { Users } from '../../util/Users.js';
import { User } from '../../models/Users.js';
import { RegisterPage } from '../../support/pages/RegisterPage.js';
import { HomePage } from '../../support/pages/HomePage.js';
import Actions  from '../../util/Actions.js'

describe('Register user', () => {

    let homePage = new HomePage();
    let registerPage = new RegisterPage();
    let actions = new Actions();
    

    let userRegistered: User;
    let user: User;


    const requiredPasswordMsg = "Password é obrigatório";
    const requiredNameMsg = "Nome é obrigatório";
    const requiredEmailMsg = "Email é obrigatório";
    const emailIsBeingUsingMsg = "Este email já está sendo usado";

    beforeEach(async () => {
        registerPage.accessRegisterPage();
    });

    it('Should register user adm with sucess', async function() { 
        user = new Users("userAdm");
        userRegistered = user;

        await registerPage.writeName(user.nome);
        await registerPage.writeEmail(user.email);
        await registerPage.writePassword(user.password);
        await registerPage.clickBtnAdm();
        await registerPage.clickBtnRegister();

        const homeText = await homePage.getTitleHomeAdm();
        expectChai(homeText).to.be.equal("Bem Vindo " + user.nome);

        await actions.screenshot();
    });

    it('Should register user common with sucess', async function() { 
        user = new Users("user");

        await registerPage.writeName(user.nome);
        await registerPage.writeEmail(user.email);
        await registerPage.writePassword(user.password);
        await registerPage.clickBtnRegister();

        const homeText = await homePage.getTitleHome();
        expectChai(homeText).to.be.equal("Serverest Store");

        await actions.screenshot();
    });
    
    it('Should be visible text "Este email ja está sendo usado" ', async function() { 
        user = userRegistered; 

        await registerPage.writeName(user.nome);
        await registerPage.writeEmail(user.email);
        await registerPage.writePassword(user.password);
        await registerPage.clickBtnRegister();

        const msg = await registerPage.getMsgFail(emailIsBeingUsingMsg);
        expectChai(msg).to.be.equal(emailIsBeingUsingMsg);

        await actions.screenshot();
    });

    it('Should be visible text "Email é obrigtório" ', async function() { 
        user = new Users('user');

        await registerPage.writeName(user.nome);
        await registerPage.writePassword(user.password);
        await registerPage.clickBtnRegister();

        const msg = await registerPage.getMsgFail(requiredEmailMsg);
        expectChai(msg).to.be.equal(requiredEmailMsg);

        await actions.screenshot();
    });
    
    it('Register user not inform name', async function() { 
        user = new Users('user');

        await registerPage.writeEmail(user.email);
        await registerPage.writePassword(user.password);
        await registerPage.clickBtnRegister();

        const msg = await registerPage.getMsgFail(requiredNameMsg);
        expectChai(msg).to.be.equal(requiredNameMsg);

        await actions.screenshot();
    });

    it('Register user not inform password', async function() { 
        user = new Users('user');

        await registerPage.writeName(user.nome);
        await registerPage.writeEmail(user.email);
        await registerPage.clickBtnRegister();

        const msg = await registerPage.getMsgFail(requiredPasswordMsg);
        expectChai(msg).to.be.equal(requiredPasswordMsg);
        
        await actions.screenshot();
    });
});

