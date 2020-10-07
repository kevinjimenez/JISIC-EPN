import {Module} from '@nestjs/common';
import {EventoHorarioService} from './evento-horario.service';
import {EventoHorarioController} from './evento-horario.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EventoHorarioRepository} from "./evento-horario.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([EventoHorarioRepository])
    ],
    providers: [EventoHorarioService],
    controllers: [EventoHorarioController],
    exports: [EventoHorarioService]
})
export class EventoHorarioModule {
}
