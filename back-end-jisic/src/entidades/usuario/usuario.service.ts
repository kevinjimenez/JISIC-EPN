import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioRepository} from "./usuario.repository";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioRepository)
        private readonly _usuarioRepository: UsuarioRepository
    ) {
    }
}
