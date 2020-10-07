import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {SubcategoriaEntity} from "./subcategoria.entity";

@EntityRepository(SubcategoriaEntity)
export class SubcategoriaRepository extends Repository<SubcategoriaEntity> {
    private logger = new Logger('SubcategoriaEntity');
}
