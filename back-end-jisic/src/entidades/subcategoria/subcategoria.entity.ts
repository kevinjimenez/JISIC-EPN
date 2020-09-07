import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subcategoria')
export class SubcategoriaEntity {
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
