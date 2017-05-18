import { IObservable } from "./observable.interface";
import { IObserver } from "./observer.interface";

export abstract class Observable<T> implements IObservable<T> {
    private _observers: IObserver<T>[] = [];

    Subscribe(observer: IObserver<T>): void {
        if (this._observers.indexOf(observer) < 0)
            this._observers.push(observer);
    }

    Unsubscribe(observer: IObserver<T>): void {
        let index = this._observers.indexOf(observer);
        if (index >= 0)
            this._observers.splice(index, 1);
    }

    protected Notify(value: T): void {
        for (let o of this._observers)
            // call OnError when needed
            o.OnNext(value);
    }

    protected Stop(): void {
        for (let observer of this._observers)
            if (this._observers.indexOf(observer) >= 0)
                observer.OnCompleted();

        this._observers = [];
    }
}