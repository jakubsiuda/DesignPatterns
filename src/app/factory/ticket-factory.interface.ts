import { Ticket } from "./ticket";

export interface ITicketFactory {
  GetCheapTicket(): Ticket;
  GetFastTicket(): Ticket;
  GetTicket(type: string): Ticket;
}