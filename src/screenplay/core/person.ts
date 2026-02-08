// test/screenplay/Actor.ts

import { Actor, Task, Question, Assertion} from './interfaces';

export class Person implements Actor {
    public readonly name: string;
    private abilities = new Map<any, any>();

    constructor(name: string) {
        this.name = name;
    }

    can(ability: any): Person {
        this.abilities.set(ability.constructor, ability);
        return this;
    }

    // Aceita uma ou várias tarefas (Rest Parameters)
    async attemptsTo(...tasks: Task[]): Promise<void> {
        for (const task of tasks) {
            console.log(`${this.name} está tentando: ${task.constructor.name}`);
            await task.performAs(this);
        }
    }

    // Método que usaremos para as Questions futuramente
    async ask<T>(question: Question<T>): Promise<T> {
        console.log(`${this.name} está perguntando: ${question.constructor.name}`);
        return await question.answeredBy(this);
    }

    // Método que usaramoes para as Should futuramente
    async should(assertion: Assertion): Promise<void> {
        await assertion.checkAs(this);
    }

}