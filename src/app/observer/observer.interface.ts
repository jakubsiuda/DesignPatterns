export interface IObserver<T> {
    OnCompleted(): void;
    OnError(error: string): void;
    OnNext(value: T): void;
}