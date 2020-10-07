import {Module} from '@nestjs/common';
import {DiasController} from './dias.controller';
import {DiasService} from './dias.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DiasRepository} from "./dias.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([DiasRepository])
    ],
    controllers: [DiasController],
    providers: [DiasService],
    exports: [DiasService]
})
export class DiasModule {
}
