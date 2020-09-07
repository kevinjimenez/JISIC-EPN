import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institucion')
export class InstitucionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'nombre'
  })
  nombres: string;

  @Column({
    type: 'varchar',
    name: 'pais'
  })
  pais: string;

  @Column({
    type: 'varchar',
    name: 'direccion'
  })
  direccion: string;

  @Column({
    type: 'varchar',
    name: 'telefono'
  })
  telefono: string;
}
