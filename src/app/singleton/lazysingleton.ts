export class LazySingleton {
    private static _instance: LazySingleton = new LazySingleton();

    private constructor() {
    }

    public static Instance(): LazySingleton {
        return this._instance;
    }

    public Foo(singletonName: string): void {
        console.log(singletonName + " singleton in action");
    }
}