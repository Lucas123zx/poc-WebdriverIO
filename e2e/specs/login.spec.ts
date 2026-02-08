import { Person } from '../../src/screenplay/core/person';
import { BrowseTheWeb } from '../../src/screenplay/abilities/browse-the-web';
import { Login } from '../../src/screenplay/tasks/login';
import { WelcomeMessage } from '../../src/screenplay/questions/welcome-message';
import { Navigate} from ' ../../../src/screenplay/interactions/navigate';
import { Ensure } from '../../src/screenplay/interactions/ensure';

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
    await carlos.should(
      Ensure.that(WelcomeMessage.displayed(),  'Bem Vindo Fulano da Silva')
    );

  });

});