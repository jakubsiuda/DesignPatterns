import { PizzaDecorator } from "./pizza-decorator";

export class Olives extends PizzaDecorator {
    GetCost(): number {
        return this._pizza.GetCost() + 4;
    }

    GetDesc(): string {
        return this._pizza.GetDesc() + " & Olives";
    }
}