import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {HorarioEntity} from "./horario.entity";

@EntityRepository(HorarioEntity)
export class HorarioRepository extends Repository<HorarioEntity> {
    private logger = new Logger('HorarioEntity');
}
