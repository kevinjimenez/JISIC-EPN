import {EntityRepository, Repository} from "typeorm";
import {ActividadEntity} from "./actividad.entity";
import {Logger} from "@nestjs/common";

@EntityRepository(ActividadEntity)
export class ActividadRepository extends Repository<ActividadEntity> {
    private logger = new Logger('ActividadEntity')
}
