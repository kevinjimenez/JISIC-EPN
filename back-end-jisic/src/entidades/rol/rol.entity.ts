import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class RolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'nombre',
  })
  nombre: string;

  @Column({
    type: 'varchar',
    name: 'descripcion',
  })
  descripcion: string;
}
