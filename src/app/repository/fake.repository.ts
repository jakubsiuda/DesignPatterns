import { Entity } from "./entity";
import { IRepository } from "./repository.interface";

export class FakeRepository implements IRepository<Entity> {

    private _entities: Entity[] = [
        { id: 1, name: "John Lennon" },
        { id: 2, name: "George Harrison" },
        { id: 3, name: "Paul McCartney" },
        { id: 4, name: "Ringo Starr" }
    ];

    FindAll(): Entity[] {
        return this._entities;
    }

    Find(predicate: (entities: Entity[]) => Entity[]): Entity[] {
        return predicate(this._entities);
    }

    FindById(id: number): Entity {
        let entity = this._entities.filter(e => e.id === id);
        if (entity.length === 0)
            return null;

        return entity[0];
    }

    Add(newEntity: Entity): void {
        this._entities.push(newEntity);
    }

    Remove(entity: Entity): void {
        let index = this._entities.indexOf(entity, 0)
        if (index < 0)
            return;

        this._entities.splice(index, 1);
    }

}