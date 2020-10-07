import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {CredencialesUsuarioRepository} from "./credenciales-usuario.repository";

@Injectable()
export class CredencialesUsuarioService {
    constructor(
        @InjectRepository(CredencialesUsuarioRepository)
        private readonly _credencialesUsuarioRepository: CredencialesUsuarioRepository
    ) {
    }
}
