import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {HorarioDiasRepository} from "./horario-dias.repository";

@Injectable()
export class HorarioDiasService {
    constructor(
        @InjectRepository(HorarioDiasRepository)
        private _horarioDiasRepository: HorarioDiasRepository
    ) {
    }
}
