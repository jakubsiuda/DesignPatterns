import { ILogger } from "./logger.interface";

export class ConsoleLogger implements ILogger {
    
    Log(log: string): void {
        console.log(log);
    }

}