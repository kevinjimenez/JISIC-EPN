import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('evento')
export class EventoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'nombre'
  })
  nombre: string;

  @Column({
    type: 'varchar',
    name: 'descripcion'
  })
  descripcion: string;
}
