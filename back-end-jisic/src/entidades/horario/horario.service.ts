import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {HorarioRepository} from "./horario.repository";

@Injectable()
export class HorarioService {
    constructor(
        @InjectRepository(HorarioRepository)
        private _horarioRepository: HorarioRepository
    ) {
    }
}
