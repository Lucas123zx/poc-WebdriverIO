import { BaseSteps } from '../util/BaseSteps.js';
import { User } from '../util/User.js';
import {expect as expectChai} from 'chai';
import RegisterPage from '../pages/RegisterPage.js';
import HomePage from '../pages/HomePage.js';
describe('Cadastrar usuário', async () => {

    let userRegistered;
    let user;

    beforeEach(async () => {
        RegisterPage.open();
    });

    it('Cadastrar usuário adm com sucesso', async () => { 
        user = User.createRandomUser();
        userRegistered = user;
        await RegisterPage.writeName(user.name);
        await RegisterPage.writeEmail(user.email);
        await RegisterPage.writePassword(user.password);
        await RegisterPage.clickBtnAdm();
        await RegisterPage.clickBtnRegister();
        const homeText = await HomePage.getTextoHome();
        expectChai(homeText).to.be.equal('Bem Vindo ' + user.name);
        await BaseSteps.validarSeEstouNaUrl('https://front.serverest.dev/admin/home');
        await BaseSteps.screenshot();
    });

    it('Cadastrar usuário commun com sucesso', async () => { 
        user = User.createRandomUser();
        await RegisterPage.writeName(user.name);
        await RegisterPage.writeEmail(user.email);
        await RegisterPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();
        const homeText = await HomePage.getTextoHome();
        expectChai(homeText).to.be.equal('Serverest Store');
        await BaseSteps.validarSeEstouNaUrl('https://front.serverest.dev/home')
    });

    it('Cadastrar usuário usando credencial email vinculada a outra conta', async () => { 
        user = userRegistered; 
        await RegisterPage.writeName(user.name);
        await RegisterPage.writeEmail(user.email);
        await RegisterPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();
        const msg = await RegisterPage.getMsgFail('Este email já está sendo usado');
        expectChai(msg).to.be.equal('Este email já está sendo usado')
    });

    it('Cadastrar usuario sem informar email', async () => { 
        user = User.createRandomUser();
        await RegisterPage.writeName(user.name);
        await RegisterPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();
        const msg = await RegisterPage.getMsgFail('Email é obrigatório');
        expectChai(msg).to.be.equal('Email é obrigatório')
    });
    
    it('Cadastrar usuario sem informar nome', async () => { 
        user = User.createRandomUser();
        await RegisterPage.writeEmail(user.email);
        await RegisterPage.writePassword(user.password);
        await RegisterPage.clickBtnRegister();
        const msg = await RegisterPage.getMsgFail('Nome é obrigatório');
        expectChai(msg).to.be.equal('Nome é obrigatório')
    });

    it('Cadastrar usuario sem informar password', async () => { 
        user = User.createRandomUser();
        await RegisterPage.writeName(user.name);
        await RegisterPage.writeEmail(user.email);
        await RegisterPage.clickBtnRegister();
        const msg = await RegisterPage.getMsgFail('Password é obrigatório');
        expectChai(msg).to.be.equal('Password é obrigatório');
    });
});

