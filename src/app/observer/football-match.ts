import { Observable } from "./observable";
import { IFootballMatchesFan } from "./football-maches-fan.interface";

export class FootballMatch extends Observable<IFootballMatchesFan> {
    GoalForChelsea() {
        console.log("Goal for Chelsea!");
        this.Notify("");
    }

    GoalForManUtd() {
        console.log("Goal for Manchester United!");
        this.Notify("");
    }

    EndOfGame() {
        console.log("The game's over");
        this.Stop();
    }
}