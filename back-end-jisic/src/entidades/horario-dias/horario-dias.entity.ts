import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('horario_dias')
export class HorarioDiasEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({
    type: 'varchar',
    name: 'nombre',
  })
  nombre: string;
}
