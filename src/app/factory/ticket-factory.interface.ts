import { Ticket } from "./tickets/ticket";

export interface ITicketFactory {
  GetCheapTicket(): Ticket;
  GetFastTicket(): Ticket;
  GetTicket(type: string): Ticket;
}
