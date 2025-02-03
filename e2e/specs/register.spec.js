import {expect as expectChai} from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { User } from '../../support/util/util/User.js';
import RegisterActions from '../../support/actions/ui/RegisterActions.js';
import CommonActions from '../../support/actions/ui/CommonActions.js';
import HomeActions from '../../support/actions/ui/HomeActions.js';

describe('Cadastrar usuário', () => {

    let userRegistered;
    let user;

    beforeEach(async () => {
        RegisterActions.open();
    });

    it('Cadastrar usuário adm com sucesso', async function() { 
        user = User.createRandomUser();
        userRegistered = user;
        await CommonActions.writeName(user.name);
        await CommonActions.writeEmail(user.email);
        await CommonActions.writePassword(user.password);
        await CommonActions.clickBtnAdm();
        await RegisterActions.clickBtnRegister();
        const homeText = await HomeActions.getTexto();
        expectChai(homeText).to.be.equal('Bem Vindo ' + user.name);
    });

    it('Cadastrar usuário commun com sucesso', async function() { 
        user = User.createRandomUser();
        await CommonActions.writeName(user.name);
        await CommonActions.writeEmail(user.email);
        await CommonActions.writePassword(user.password);
        await RegisterActions.clickBtnRegister();
        const homeText = await HomeActions.getTexto();
        expectChai(homeText).to.be.equal('Serverest Store');
    });
    
    it('Cadastrar usuário usando credencial email vinculada a outra conta', async function() { 
        user = userRegistered; 
        await CommonActions.writeName(user.name);
        await CommonActions.writeEmail(user.email);
        await CommonActions.writePassword(user.password);
        await RegisterActions.clickBtnRegister();
        const msg = await RegisterActions.getMsgFail('Este email já está sendo usado');
        expectChai(msg).to.be.equal('Este email já está sendo usado')
    });

    it('Cadastrar usuario sem informar email', async function() { 
        user = User.createRandomUser();
        await CommonActions.writeName(user.name);
        await CommonActions.writePassword(user.password);
        await RegisterActions.clickBtnRegister();
        const msg = await RegisterActions.getMsgFail('Email é obrigatório');
        expectChai(msg).to.be.equal('Email é obrigatório')
    });
    
    it('Cadastrar usuario sem informar nome', async function() { 
        user = User.createRandomUser();
        await CommonActions.writeEmail(user.email);
        await CommonActions.writePassword(user.password);
        await RegisterActions.clickBtnRegister();
        const msg = await RegisterActions.getMsgFail('Nome é obrigatório');
        expectChai(msg).to.be.equal('Nome é obrigatório')
    });

    it('Cadastrar usuario sem informar password', async function() { 
        user = User.createRandomUser();
        await CommonActions.writeName(user.name);
        await CommonActions.writeEmail(user.email);
        await RegisterActions.clickBtnRegister();
        const msg = await RegisterActions.getMsgFail('Password é obrigatório');
        expectChai(msg).to.be.equal('Password é obrigatório');
    });
});

