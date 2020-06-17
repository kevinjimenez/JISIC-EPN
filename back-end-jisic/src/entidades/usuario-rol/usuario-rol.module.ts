import { Module } from '@nestjs/common';
import { UsuarioRolService } from './usuario-rol.service';
import { UsuarioRolController } from './usuario-rol.controller';

@Module({
  providers: [UsuarioRolService],
  controllers: [UsuarioRolController]
})
export class UsuarioRolModule {}
