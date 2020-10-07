import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {SubcategoriaRepository} from "./subcategoria.repository";

@Injectable()
export class SubcategoriaService {
    constructor(
        @InjectRepository(SubcategoriaRepository)
        private readonly _subcategoriaRepository: SubcategoriaRepository
    ) {
    }
}
