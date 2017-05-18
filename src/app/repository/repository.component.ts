import { Component } from "@angular/core";
import { FakeRepository } from "./fake.repository";
import { Entity } from "./entity";

@Component({
    moduleId: module.id,
    template: ''
})
export class Repository {
    constructor() {
        console.log("Repository");

        let rep = new FakeRepository();

        console.log("Find all: "
            + JSON.stringify(
                rep.FindAll()
            ));

        console.log("Find the one of id 3: "
            + JSON.stringify(
                rep.FindById(3)
            ));

        console.log("Find the ones containing \"on\": "
            + JSON.stringify(
                rep.Find(entities => entities.filter(e => e.name.indexOf("on") >= 0)
                )));


        let oldMember = new Entity();
        oldMember.id = 5;
        oldMember.name = "Pete Best";

        rep.Add(oldMember);
        console.log("Find all: " +
            JSON.stringify(
                rep.FindAll()
            ));


        rep.Remove(oldMember);
        console.log("Find all: " +
            JSON.stringify(
                rep.FindAll()
            ));
    }
}