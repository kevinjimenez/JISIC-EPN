import {EntityRepository, Repository} from "typeorm";
import {EstablecimientoEntity} from "./establecimiento.entity";
import {Logger} from "@nestjs/common";

@EntityRepository(EstablecimientoEntity)
export class EstablecimientoRepository extends Repository<EstablecimientoEntity> {
    private logger = new Logger('EstablecimientoEntity');
}
