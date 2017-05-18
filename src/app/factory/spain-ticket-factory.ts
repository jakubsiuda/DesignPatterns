import { ITicketFactory } from "./ticket-factory.interface";
import { Ticket } from "./tickets/ticket";

import * as tickets from './tickets/ticket.export';

export class SpainTicketFactory implements ITicketFactory {

    GetCheapTicket(): Ticket {
        let ticket = new Ticket();

        ticket.meansOfTransport = "train";
        ticket.durationInMinutes = 300;
        ticket.price = 150;

        return ticket;
    }

    GetFastTicket(): Ticket {
        let ticket = new Ticket();

        ticket.meansOfTransport = "plane";
        ticket.durationInMinutes = 90;
        ticket.price = 250;

        return ticket;
    }

    GetTicket(ticketType: string): Ticket {
        try {
            return new tickets[ticketType]();
        }
        catch (e) {
            console.log('Incorrect ticket type. Could not create the ticket.')
            return null;
        }
    }
}