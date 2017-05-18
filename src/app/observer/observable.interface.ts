import { IObserver } from "./observer.interface";

export interface IObservable<T> {
    Subscribe(observer: IObserver<T>): void;
}