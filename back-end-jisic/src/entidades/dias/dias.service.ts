import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DiasRepository} from "./dias.repository";

@Injectable()
export class DiasService {
    constructor(
        @InjectRepository(DiasRepository)
        private _diasRepository:DiasRepository
    ) {
    }
}
