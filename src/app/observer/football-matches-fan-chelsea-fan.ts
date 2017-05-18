import { IFootballMatchesFan } from "./football-maches-fan.interface";
import { IObserver } from "./observer.interface";
import { FootballMatch } from "./football-match";

export class FootballMatchesChelseaFan implements IFootballMatchesFan, IObserver<FootballMatch> {
    OnCompleted(): void {
        console.log("We don't really need Mourinho, ain't we");
    }
    OnError(error: string): void {
        console.log("Nothing works in this country");
    }
    OnNext(value: FootballMatch): void {
        console.log("Go, go, The Blues!");
    }
}