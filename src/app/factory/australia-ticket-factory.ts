import { ITicketFactory } from "./ticket-factory.interface";
import { Ticket } from "./tickets/ticket";

import * as tickets from './tickets/ticket.export';

export class AustraliaTicketFactory implements ITicketFactory {

    GetCheapTicket(): Ticket {
        let ticket = new Ticket();

        ticket.meansOfTransport = "cheap plane";
        ticket.durationInMinutes = 1200;
        ticket.price = 500;

        return ticket;
    }

    GetFastTicket(): Ticket {
        let ticket = new Ticket();

        ticket.meansOfTransport = "super fast plane";
        ticket.durationInMinutes = 600;
        ticket.price = 1400;

        return ticket;
    }

    GetTicket(type: string): Ticket {
        try {
            return new tickets[type]();
        }
        catch (e) {
            return this.GetCheapTicket();
        }
    }
}