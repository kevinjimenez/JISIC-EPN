import {Module} from '@nestjs/common';
import {InstitucionController} from './institucion.controller';
import {InstitucionService} from './institucion.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {InstitucionRepository} from "./institucion.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([InstitucionRepository])
    ],
    controllers: [InstitucionController],
    providers: [InstitucionService],
    exports: [InstitucionService]
})
export class InstitucionModule {
}
