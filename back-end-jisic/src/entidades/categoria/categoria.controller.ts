import {Controller, Get} from '@nestjs/common';
import {CategoriaService} from "./categoria.service";

@Controller('categoria')
export class CategoriaController {
    constructor(
        private readonly _categoriaService: CategoriaService
    ) {
    }


}
