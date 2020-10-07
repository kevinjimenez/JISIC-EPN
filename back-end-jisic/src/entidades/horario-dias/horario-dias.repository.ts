import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {HorarioDiasEntity} from "./horario-dias.entity";

@EntityRepository(HorarioDiasEntity)
export class HorarioDiasRepository extends Repository<HorarioDiasEntity> {
    private logger = new Logger('HorarioDiasEntity');
}
