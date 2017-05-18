import { Component } from "@angular/core";
import { SpainTicketFactory } from "./spain-ticket-factory";
import { AustraliaTicketFactory } from "./australia-ticket-factory";

@Component({
    selector: 'factory',
    moduleId: module.id,
    template: ''
})
export class Factory {
    constructor() {
        console.log("Factory");

        let spain = new SpainTicketFactory();
        console.log("Let's go to Spain the cheapest way possible! " + JSON.stringify(spain.GetCheapTicket()));
        console.log("Let's go to Spain the fastest way possible! " + JSON.stringify(spain.GetFastTicket()));
        console.log('Just let me go! ' + JSON.stringify(spain.GetTicket("Ticket")));

        let australia = new AustraliaTicketFactory();
        console.log("Let's go to Australia like we own this world! " + JSON.stringify(australia.GetFastTicket()));
        console.log("Let's go to Australia like we are who we are! " + JSON.stringify(australia.GetCheapTicket()));
        console.log('Just let me go! ' + JSON.stringify(spain.GetTicket("DetailedTicket")));
    }
}