import { PizzaDecorator } from "./pizza-decorator";

export class Cheese extends PizzaDecorator {
    GetCost(): number {
        return this._pizza.GetCost() + 3;
    }

    GetDesc(): string {
        return this._pizza.GetDesc() + " & Cheese";
    }
}