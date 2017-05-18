export interface IRepository<T> {
    FindAll(): T[];
    Find(predicate: (entities: T[]) => T[]): T[];
    FindById(id: number): T;
    Add(newEntity: T): void;
    Remove(entity: T): void;
}