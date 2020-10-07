import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {RolEntity} from "./rol.entity";

@EntityRepository(RolEntity)
export class RolRepository extends Repository<RolEntity> {
    private logger = new Logger('RolEntity');
}
