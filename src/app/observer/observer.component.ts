import { Component } from "@angular/core";
import { FootballMatch } from "./football-match";
import { FootballMatchesManUtdFan } from "./football-matches-fan-manutd-fan";
import { FootballMatchesChelseaFan } from "./football-matches-fan-chelsea-fan";

@Component({
    selector: 'observer',
    moduleId: module.id,
    template: ''
})
export class Observer {
    constructor() {
        console.log("Observer");

        let footballMatch = new FootballMatch();
        let ryan = new FootballMatchesManUtdFan();
        let jakub = new FootballMatchesChelseaFan();

        footballMatch.GoalForChelsea();
        console.log("No one is watching so this event is not even emitted");

        footballMatch.Subscribe(ryan);
        footballMatch.Subscribe(ryan);
        footballMatch.Subscribe(jakub);
        console.log("Ryan and Jakub started watching");

        footballMatch.GoalForChelsea();

        console.log("Ryan can't stand it and leaves");
        footballMatch.Unsubscribe(ryan);

        footballMatch.GoalForManUtd();

        footballMatch.EndOfGame();
    }
}