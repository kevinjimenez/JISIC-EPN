import {Module} from '@nestjs/common';
import {HorarioController} from './horario.controller';
import {HorarioService} from './horario.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HorarioRepository} from "./horario.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([HorarioRepository])
    ],
    controllers: [HorarioController],
    providers: [HorarioService]
})
export class HorarioModule {
}
