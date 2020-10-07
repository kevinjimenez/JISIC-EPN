import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {EventoRepository} from "./evento.repository";

@Injectable()
export class EventoService {
    constructor(
        @InjectRepository(EventoRepository)
        private _eventoRepository: EventoRepository
    ) {
    }
}

