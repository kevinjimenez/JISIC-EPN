import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {EventoEntity} from "./evento.entity";

@EntityRepository(EventoEntity)
export class EventoRepository extends Repository<EventoEntity> {
    private logger = new Logger('EventoEntity');
}
