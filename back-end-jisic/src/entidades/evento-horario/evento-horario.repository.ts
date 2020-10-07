import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {EventoHorarioEntity} from "./evento-horario.entity";

@EntityRepository(EventoHorarioEntity)
export class EventoHorarioRepository extends Repository<EventoHorarioEntity> {
    private logger = new Logger('EventoHorarioEntity');
}
