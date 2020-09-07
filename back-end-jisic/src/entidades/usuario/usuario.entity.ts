import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'nombres'
  })
  nombres: string;

  @Column({
    type: 'varchar',
    name: 'apellidos'
  })
  apellidos: string;

  @Column({
    type: 'varchar',
    name: 'CI_Pasaporte'
  })
  CIPasaporte: string;

  @Column({
    type: 'varchar',
    name: 'correo'
  })
  correo: string;
}
