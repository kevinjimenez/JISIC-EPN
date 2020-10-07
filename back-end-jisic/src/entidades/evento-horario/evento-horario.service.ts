import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {EventoHorarioRepository} from "./evento-horario.repository";

@Injectable()
export class EventoHorarioService {
    constructor(
        @InjectRepository(EventoHorarioRepository)
        private _eventoHorarioRepository: EventoHorarioRepository
    ) {
    }
}
