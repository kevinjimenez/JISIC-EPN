import {Module} from '@nestjs/common';
import {TicketService} from './ticket.service';
import {TicketController} from './ticket.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TicketRepository} from "./ticket.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([TicketRepository])
    ],
    providers: [TicketService],
    controllers: [TicketController],
    exports: [TicketService]
})
export class TicketModule {
}
