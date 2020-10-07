import {EntityRepository, Repository} from "typeorm";
import {CredencialesUsuarioEntity} from "./credenciales-usuario.entity";
import {Logger} from "@nestjs/common";

@EntityRepository(CredencialesUsuarioEntity)
export class CredencialesUsuarioRepository extends Repository<CredencialesUsuarioEntity> {
    private logger = new Logger('CredencialesUsuarioEntity')
}
