import { Assertion, Question, Actor  } from '../core/interfaces';
import { expect } from 'chai';

export class Ensure implements Assertion  {
    private question: Question<any>;
    private expectedValue: any;

    constructor(question: Question<any>, expectedValue: any) {
        this.question = question;
        this.expectedValue = expectedValue;
    }

    static that(quest: Question<any>, value: any): Assertion {
        return new Ensure(quest, value);
    }

    async checkAs(actor: Actor): Promise<void> {
        const actualValue = await actor.ask(this.question);
        await expect(actualValue).to.contain(this.expectedValue);
    }

}