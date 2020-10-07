import {Module} from '@nestjs/common';
import {EstablecimientoController} from './establecimiento.controller';
import {EstablecimientoService} from './establecimiento.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EstablecimientoRepository} from "./establecimiento.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([EstablecimientoRepository])
    ],
    controllers: [EstablecimientoController],
    providers: [EstablecimientoService],
    exports: [EstablecimientoService]
})
export class EstablecimientoModule {
}
