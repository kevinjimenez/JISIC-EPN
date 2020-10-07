import {EntityRepository, Repository} from "typeorm";
import {CredencialesUsuarioEntity} from "../credenciales-usuario/credenciales-usuario.entity";
import {Logger} from "@nestjs/common";
import {DiasEntity} from "./dias.entity";

@EntityRepository(DiasEntity)
export class DiasRepository extends Repository<DiasEntity> {
    private logger = new Logger('DiasEntity')
}
