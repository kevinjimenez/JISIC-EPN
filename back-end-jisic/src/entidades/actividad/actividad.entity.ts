import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('actividad')
export class ActividadEntity {
  @PrimaryGeneratedColumn()
  id: string;

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
