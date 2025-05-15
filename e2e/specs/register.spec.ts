import {expect as expectChai} from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { Users } from '../../pageobjects/util/Users.js';
import { User } from '../../models/Users.js';
import { RegisterPage } from '../../pageobjects/pages/RegisterPage.js';
import { CommonPage } from '../../pageobjects/pages/CommonPage.js';
import { HomePage } from '../../pageobjects/pages/HomePage.js';
import { BaseActions } from '../../pageobjects/actions/base/BaseAction.js';

describe('Register user', () => {

    let commonPage = new CommonPage();
    let homePage = new HomePage();

    let userRegistered: User;
    let user: User;


    const requiredPasswordMsg = "Password é obrigatório";
    const requiredNameMsg = "Nome é obrigatório";
    const requiredEmailMsg = "Email é obrigatório";
    const emailIsBeingUsingMsg = "Este email já está sendo usado";

    beforeEach(async () => {
        BasePage.open("/cadastrarusuarios");
    });

    it('Should register user adm with sucess', async function() { 
        user = new Users("userAdm");
        userRegistered = {nome: user.nome, email: user.email, password: user.password, administrador: user.administrador};

        await CommonPage.writeName(user.nome);
        await CommonPage.writeEmail(user.email);
        await CommonPage.writePassword(user.password);
        await CommonPage.clickBtnAdm();
        await RegisterPage.clickBtnRegister();

        const homeText = await HomePage.getTitleHomeAdm();
        expectChai(homeText).to.be.equal("Bem Vindo " + user.nome);

        await BasePage.screenshot();
    });

    it('Should register user common with sucess', async function() { 
        user = new Users("user");

        await CommonPage.writeName(user.nome);
        await CommonPage.writeEmail(user.email);
        await CommonPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();

        const homeText = await HomePage.getTitleHome();
        expectChai(homeText).to.be.equal("Serverest Store");

        await BasePage.screenshot();
    });
    
    it('Should be visible text "Este email ja está sendo usado" ', async function() { 
        user = userRegistered; 

        await CommonPage.writeName(user.nome);
        await CommonPage.writeEmail(user.email);
        await CommonPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();

        const msg = await RegisterPage.getMsgFail(emailIsBeingUsingMsg);
        expectChai(msg).to.be.equal(emailIsBeingUsingMsg);

        await BasePage.screenshot();
    });

    it('Should be visible text "Email é obrigtório" ', async function() { 
        user = new Users('user');

        await CommonPage.writeName(user.nome);
        await CommonPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();

        const msg = await RegisterPage.getMsgFail(requiredEmailMsg);
        expectChai(msg).to.be.equal(requiredEmailMsg);

        await BasePage.screenshot();
    });
    
    it('Register user not inform name', async function() { 
        user = new Users('user');

        await CommonPage.writeEmail(user.email);
        await CommonPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();

        const msg = await RegisterPage.getMsgFail(requiredNameMsg);
        expectChai(msg).to.be.equal(requiredNameMsg);

        await BasePage.screenshot();
    });

    it('Register user not inform password', async function() { 
        user = new Users('user');

        await CommonPage.writeName(user.nome);
        await CommonPage.writeEmail(user.email);
        await RegisterPage.clickBtnRegister();

        const msg = await RegisterPage.getMsgFail(requiredPasswordMsg);
        expectChai(msg).to.be.equal(requiredPasswordMsg);
        
        await BasePage.screenshot();
    });
});

