import {EntityRepository, Repository} from "typeorm";
import {Logger} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";

@EntityRepository(UsuarioEntity)
export class UsuarioRepository extends Repository<UsuarioEntity> {
    private logger = new Logger('UsuarioEntity');
}
