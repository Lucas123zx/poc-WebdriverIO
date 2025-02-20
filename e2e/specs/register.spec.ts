import {expect as expectChai} from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { User } from '../../pageobjects/util/User.js';
import RegisterActions from '../../pageobjects/actions/ui/RegisterActions.js';
import CommonActions from '../../pageobjects/actions/ui/CommonActions.js';
import HomeActions from '../../pageobjects/actions/ui/HomeActions.js';
import BaseUI from '../../pageobjects/actions/base/BaseUI.js';

describe('Register user', () => {

    let userRegistered: any;
    let user: any;

    beforeEach(async () => {
        BaseUI.open('/cadastrarusuarios');
    });

    it('Register user adm with sucess', async function() { 
        user = User.createRandomUser();
        userRegistered = {name: user.getName(), email: user.getEmail(), password: user.getPasswrod()};
        await CommonActions.writeName(user.getName());
        await CommonActions.writeEmail(user.getEmail());
        await CommonActions.writePassword(user.getPasswrod());
        await CommonActions.clickBtnAdm();
        await RegisterActions.clickBtnRegister();
        const homeText = await HomeActions.getTitleHomeAdm();
        expectChai(homeText).to.be.equal('Bem Vindo ' + user.getName());
        await BaseUI.screenshot();
    });

    it('Register user common with sucess', async function() { 
        user = User.createRandomUser();
        await CommonActions.writeName(user.getName());
        await CommonActions.writeEmail(user.getEmail());
        await CommonActions.writePassword(user.getPasswrod());
        await RegisterActions.clickBtnRegister();
        const homeText = await HomeActions.getTitleHome();
        expectChai(homeText).to.be.equal('Serverest Store');
        await BaseUI.screenshot();
    });
    
    it('Register user with credential email link other account', async function() { 
        user = userRegistered; 
        await CommonActions.writeName(user.name);
        await CommonActions.writeEmail(user.email);
        await CommonActions.writePassword(user.password);
        await RegisterActions.clickBtnRegister();
        const msg = await RegisterActions.getMsgFail('Este email já está sendo usado');
        expectChai(msg).to.be.equal('Este email já está sendo usado');
        await BaseUI.screenshot();
    });

    it('Register user not inform email', async function() { 
        user = User.createRandomUser();
        await CommonActions.writeName(user.getName());
        await CommonActions.writePassword(user.getPasswrod());
        await RegisterActions.clickBtnRegister();
        const msg = await RegisterActions.getMsgFail('Email é obrigatório');
        expectChai(msg).to.be.equal('Email é obrigatório');
        await BaseUI.screenshot();
    });
    
    it('Register user not inform name', async function() { 
        user = User.createRandomUser();
        await CommonActions.writeEmail(user.getEmail());
        await CommonActions.writePassword(user.getPasswrod());
        await RegisterActions.clickBtnRegister();
        const msg = await RegisterActions.getMsgFail('Nome é obrigatório');
        expectChai(msg).to.be.equal('Nome é obrigatório');
        await BaseUI.screenshot();
    });

    it('Register user not inform password', async function() { 
        user = User.createRandomUser();
        await CommonActions.writeName(user.getName());
        await CommonActions.writeEmail(user.getEmail());
        await RegisterActions.clickBtnRegister();
        const msg = await RegisterActions.getMsgFail('Password é obrigatório');
        expectChai(msg).to.be.equal('Password é obrigatório');
        await BaseUI.screenshot();
    });
});

