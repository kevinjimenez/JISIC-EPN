import {Module} from '@nestjs/common';
import {CategoriaService} from './categoria.service';
import {CategoriaController} from './categoria.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CategoriaRepository} from "./categoria.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([CategoriaRepository])
    ],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [CategoriaService]
})
export class CategoriaModule {
}
