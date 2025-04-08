import {expect as expectChai} from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { Users } from '../../pageobjects/util/Users.js';
import { User } from '../../models/Users.js';
import RegisterPage from '../../pageobjects/pages/RegisterPage.js';
import CommonPage from '../../pageobjects/pages/CommonPage.js';
import HomePage from '../../pageobjects/pages/HomePage.js';
import BasePage from '../../pageobjects/pages/base/BasePage.js';

describe('Register user', () => {

    let userRegistered: User;
    let user: User;

    beforeEach(async () => {
        BasePage.open("/cadastrarusuarios");
    });

    it('Should register user adm with sucess', async function() { 
        user = new Users("true");
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
        user = new Users("false");
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
        const msg = await RegisterPage.getMsgFail("Este email já está sendo usado");
        expectChai(msg).to.be.equal("Este email já está sendo usado");
        await BasePage.screenshot();
    });

    it('Should be visible text "Email é obrigtório" ', async function() { 
        user = new Users('false');
        await CommonPage.writeName(user.nome);
        await CommonPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();
        const msg = await RegisterPage.getMsgFail("Email é obrigatório");
        expectChai(msg).to.be.equal("Email é obrigatório");
        await BasePage.screenshot();
    });
    
    it('Register user not inform name', async function() { 
        user = new Users('false');
        await CommonPage.writeEmail(user.email);
        await CommonPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();
        const msg = await RegisterPage.getMsgFail("Nome é obrigatório");
        expectChai(msg).to.be.equal("Nome é obrigatório");
        await BasePage.screenshot();
    });

    it('Register user not inform password', async function() { 
        user = new Users('false');
        await CommonPage.writeName(user.nome);
        await CommonPage.writeEmail(user.email);
        await RegisterPage.clickBtnRegister();
        const msg = await RegisterPage.getMsgFail("Password é obrigatório");
        expectChai(msg).to.be.equal("Password é obrigatório");
        await BasePage.screenshot();
    });
});

