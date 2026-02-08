import { Actor } from './actor';

export interface Assertion {
    checkAs(actor: Actor): Promise<void>; 
}