import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {TicketEntity} from "./ticket.entity";

@EntityRepository(TicketEntity)
export class TicketRepository extends Repository<TicketEntity> {
    private logger = new Logger('TicketEntity');
}
