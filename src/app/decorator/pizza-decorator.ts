import { Pizza } from "./pizza";

export abstract class PizzaDecorator extends Pizza {
    constructor(protected _pizza: Pizza) {
        super();
    }
}