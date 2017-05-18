import { Component } from "@angular/core";

import { ServiceLoc } from "./service-locator";
import { ILogger } from "./loggers/logger.interface";

@Component({
    template: ''
})
export class ServiceLocator {

    constructor() {
        console.log("Service Locator");

        let logger = ServiceLoc.getService<ILogger>("loggerToUse");
        logger.Log("An example of the application's log!");
    }
}