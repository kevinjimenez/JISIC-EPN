import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioRolRepository} from "./usuario-rol.repository";

@Injectable()
export class UsuarioRolService {
    constructor(
        @InjectRepository(UsuarioRolRepository)
        private readonly _usuarioRolRepository: UsuarioRolRepository
    ) {
    }
}
