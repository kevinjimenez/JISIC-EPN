import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('establecimiento')
export class EstablecimientoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar',
    name: 'nombre'
  })
  nombre: string;

  @Column({
    type: 'varchar',
    name: 'direccion'
  })
  direccion: string;
}
