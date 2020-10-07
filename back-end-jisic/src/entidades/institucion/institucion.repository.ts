import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {InstitucionEntity} from "./institucion.entity";

@EntityRepository(InstitucionEntity)
export class InstitucionRepository extends Repository<InstitucionEntity> {
    private logger = new Logger('InstitucionEntity');
}
