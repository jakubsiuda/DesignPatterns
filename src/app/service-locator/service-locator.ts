import * as loggers from './loggers/loggers.export';

export class ServiceLoc {
    private static readonly _services: { [key: string]: any; } = { };
    private static _instance: ServiceLoc = new ServiceLoc();

    private constructor() {
        this.loadServicesFromConfig();
    }

    public static addService<T>(name: string, t: T) {
        this._services[name] = t;
    }

    public static getService<T>(name: string): T {
        return this._services[name];
    }

    private loadServicesFromConfig() {
        let config = this.loadConfig();

        let logger = new loggers[config.loggerToUse]();
        ServiceLoc.addService("loggerToUse", logger);
    }

    private loadConfig(): any {
        console.log("Loading config file");

        let config =
            {
                "loggerToUse": "ConsoleLogger"
                // "loggerToUse": "AnnoyingConsoleLogger"
            };

        console.log("Config file loaded");

        return config;
    }
}