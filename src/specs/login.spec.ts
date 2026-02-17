import { Person } from '../screenplay/core/person';
import { BrowseTheWeb } from '../screenplay/abilities/browse-the-web';
import { Login } from '../screenplay/tasks/login';
import { WelcomeMessage } from '../screenplay/questions/welcome-message';
import { Navigate} from ' ../../../src/screenplay/interactions/navigate';
import { expect } from 'chai';

describe('Login Sistema', () => {
  it('deve realizar login com sucesso e visualizar mensagem de boas-vindas', async () => {
    
    // 1. Preparação (O Ator e suas Habilidades)
    // O objeto 'browser' é fornecido globalmente pelo WebdriverIO
    const carlos = new Person('Carlos')
      .can(new BrowseTheWeb(browser));

    // 2. Ação (Tasks)
    await carlos.attemptsTo(
      Navigate.to('https://front.serverest.dev/login'),
      
      Login.withCredentials('fulano@qa.com', 'teste')
    );    

    //3. Verificando a mensagem de boas-vindas
    const menssage = carlos.ask(WelcomeMessage.displayed());
    expect(menssage).to.be.eq('Bem Vindo Fulano da Silva');
    
  });

});