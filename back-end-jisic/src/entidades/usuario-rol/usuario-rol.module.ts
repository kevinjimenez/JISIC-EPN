import {Module} from '@nestjs/common';
import {UsuarioRolService} from './usuario-rol.service';
import {UsuarioRolController} from './usuario-rol.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioRolRepository} from "./usuario-rol.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsuarioRolRepository])
    ],
    providers: [UsuarioRolService],
    controllers: [UsuarioRolController],
    exports: [UsuarioRolService]
})
export class UsuarioRolModule {
}
