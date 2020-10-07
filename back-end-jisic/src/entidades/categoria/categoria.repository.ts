import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {CategoriaEntity} from "./categoria.entity";

@EntityRepository(CategoriaEntity)
export class CategoriaRepository extends Repository<CategoriaEntity> {
    private logger = new Logger('CategoriaEntity')
}
