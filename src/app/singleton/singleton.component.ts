import { Component } from "@angular/core";
import { LazySingleton } from "./lazysingleton";
import { NamespaceSingleton } from "./namespacesingleton";

@Component({
    moduleId: module.id,
    template: ''
})
export class Singleton {
    constructor() {
        console.log("Singleton");

        let a = LazySingleton.Instance();
        a.Foo("a");

        let b = LazySingleton.Instance();
        b.Foo("b");

        console.log('is a and b the same instance? ' + (a === b));

        console.log("Namespace Singleton")

        let c = NamespaceSingleton;
        c.Foo("c");

        let d = NamespaceSingleton;
        d.Foo("d");

        console.log("is c and d the same instance? " + (c == d));
    }
}