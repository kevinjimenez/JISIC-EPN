import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {UsuarioRolEntity} from "./usuario-rol.entity";

@EntityRepository(UsuarioRolEntity)
export class UsuarioRolRepository extends Repository<UsuarioRolEntity> {
    private logger = new Logger('UsuarioRolEntity');
}
