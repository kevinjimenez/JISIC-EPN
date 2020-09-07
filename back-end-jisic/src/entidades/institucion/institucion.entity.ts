import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institucion')
export class InstitucionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  
}
