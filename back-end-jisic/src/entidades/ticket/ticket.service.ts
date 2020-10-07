import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TicketRepository} from "./ticket.repository";

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(TicketRepository)
        private readonly _ticketRepository: TicketRepository
    ) {
    }
}
