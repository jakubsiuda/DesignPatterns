import { ILogger } from "./logger.interface";

export class AnnoyingConsoleLogger implements ILogger {

    Log(log: string): void {
        console.log("I am so annoying");
        console.log(log);
        console.log("Still annoying");
    }

}