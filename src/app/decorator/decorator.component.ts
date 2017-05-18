import { Component } from "@angular/core";
import { Pizza } from "./pizza";
import { Cheese } from "./cheese";
import { Olives } from "./olives";

@Component({
    selector: 'decorator',
    moduleId: module.id,
    template: ''
})
export class Decorator {
    constructor() {
        console.log("Decorator");

        let pizza = new Pizza();
        console.log("The cost of " + pizza.GetDesc() + ": " + pizza.GetCost());

        pizza = new Cheese(pizza);
        console.log("The cost of " + pizza.GetDesc() + ": " + pizza.GetCost());

        pizza = new Olives(pizza);
        console.log("The cost of " + pizza.GetDesc() + ": " + pizza.GetCost());
    }
}