import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entity } from "./repository/entity";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let entity: Entity[] = [
            { id: 1, name: "John Lennon" },
            { id: 2, name: "George Harrison" },
            { id: 3, name: "Paul McCartney" },
            { id: 4, name: "Ringo Starr" }
        ]

        return { entity };
    }
}