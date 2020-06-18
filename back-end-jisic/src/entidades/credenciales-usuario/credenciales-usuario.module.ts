import { Module } from '@nestjs/common';
import { CredencialesUsuarioController } from './credenciales-usuario.controller';
import { CredencialesUsuarioService } from './credenciales-usuario.service';

@Module({
  controllers: [CredencialesUsuarioController],
  providers: [CredencialesUsuarioService]
})
export class CredencialesUsuarioModule {}
