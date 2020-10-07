import {Module} from '@nestjs/common';
import {EventoController} from './evento.controller';
import {EventoService} from './evento.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EventoRepository} from "./evento.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([EventoRepository])
    ],
    controllers: [EventoController],
    providers: [EventoService],
    exports: [EventoService]
})
export class EventoModule {
}
