import {Module} from '@nestjs/common';
import {HorarioDiasService} from './horario-dias.service';
import {HorarioDiasController} from './horario-dias.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HorarioDiasRepository} from "./horario-dias.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([HorarioDiasRepository])
    ],
    providers: [HorarioDiasService],
    controllers: [HorarioDiasController],
    exports: [HorarioDiasService]
})
export class HorarioDiasModule {
}
