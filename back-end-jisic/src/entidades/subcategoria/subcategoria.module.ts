import {Module} from '@nestjs/common';
import {SubcategoriaService} from './subcategoria.service';
import {SubcategoriaController} from './subcategoria.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubcategoriaRepository} from "./subcategoria.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([SubcategoriaRepository])
    ],
    providers: [SubcategoriaService],
    controllers: [SubcategoriaController],
    exports: [SubcategoriaService]
})
export class SubcategoriaModule {
}
