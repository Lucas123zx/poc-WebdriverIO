import { Task, Actor } from '../core/interfaces';
import { LoginElements} from '../ui/LoginElements';
import { Enter } from '../interactions/enter';
import { Click } from '../interactions/click';

export class Login implements Task {
    private email;
    private password;
   
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
   
    static withCredentials(email: string, password: string) {
        return new Login(email, password);
    }

    async performAs(actor: Actor): Promise<void> {
        await actor.attemptsTo(
            Enter.theValue(this.email).into(LoginElements.inpEmail),
            Enter.theValue(this.password).into(LoginElements.inpPassword),
            Click.on(LoginElements.btnLogin)
        );
    }

};