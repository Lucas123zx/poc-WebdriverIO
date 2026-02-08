import { Task } from './task';
import { Question } from './question';

export interface Actor {
    name: string; 
    attemptsTo(...tasks: Task[]): Promise<void>;
    ask<T>(question: Question<T>): Promise<T>;

}
