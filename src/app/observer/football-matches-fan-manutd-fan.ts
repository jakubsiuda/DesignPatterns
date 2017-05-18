import { IFootballMatchesFan } from "./football-maches-fan.interface";
import { IObserver } from "./observer.interface";
import { FootballMatch } from "./football-match";

export class FootballMatchesManUtdFan implements IFootballMatchesFan, IObserver<FootballMatch> {
    OnCompleted(): void {
        console.log("Maybe next season");
    }
    OnError(error: string): void {
        console.log("What the hell happened to my TV?");
    }
    OnNext(value: FootballMatch): void {
        console.log("Glory, glory, Man United");
    }
}