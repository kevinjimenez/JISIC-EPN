import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoria')
export class CategoriaEntity {
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
