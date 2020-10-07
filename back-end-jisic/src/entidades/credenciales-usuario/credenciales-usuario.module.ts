import {Module} from '@nestjs/common';
import {CredencialesUsuarioController} from './credenciales-usuario.controller';
import {CredencialesUsuarioService} from './credenciales-usuario.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CredencialesUsuarioRepository} from "./credenciales-usuario.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CredencialesUsuarioRepository
        ])
    ],
    controllers: [CredencialesUsuarioController],
    providers: [CredencialesUsuarioService],
    exports: [CredencialesUsuarioService]
})
export class CredencialesUsuarioModule {
}
