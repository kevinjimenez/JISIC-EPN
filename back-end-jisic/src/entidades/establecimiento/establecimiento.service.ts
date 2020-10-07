import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {EstablecimientoRepository} from "./establecimiento.repository";

@Injectable()
export class EstablecimientoService {
    constructor(
        @InjectRepository(EstablecimientoRepository)
        private readonly  _establecimientoRepository: EstablecimientoRepository
    ) {
    }
}
