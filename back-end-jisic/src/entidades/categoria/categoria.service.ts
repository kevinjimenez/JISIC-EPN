import {Injectable} from '@nestjs/common';
import {CategoriaRepository} from "./categoria.repository";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(CategoriaRepository)
        private readonly _categoriaRepository: CategoriaRepository
    ) {
    }
}
