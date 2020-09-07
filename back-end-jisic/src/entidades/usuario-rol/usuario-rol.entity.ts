import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario_rol')
export class UsuarioRolEntity {
  @PrimaryGeneratedColumn()
  id: number;

}
