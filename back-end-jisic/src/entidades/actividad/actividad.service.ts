import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ActividadRepository} from "./actividad.repository";

@Injectable()
export class ActividadService {
    constructor(
        @InjectRepository(ActividadRepository)
        private readonly _actividadRepository: ActividadRepository
    ) {
    }
}
