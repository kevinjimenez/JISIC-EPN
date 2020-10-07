import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {InstitucionRepository} from "./institucion.repository";

@Injectable()
export class InstitucionService {
    constructor(
        @InjectRepository(InstitucionRepository)
        private readonly _InstitucionRepository: InstitucionRepository
    ) {
    }
}
