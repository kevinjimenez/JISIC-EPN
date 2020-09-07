import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dias')
export class DiasEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'tinyint',
    name: 'lunes'
  })
  lunes: 0 | 1;

  @Column({
    type: 'tinyint',
    name: 'martes'
  })
  martes: 0 | 1;

  @Column({
    type: 'tinyint',
    name: 'miercoles'
  })
  miercoles: 0 | 1;

  @Column({
    type: 'tinyint',
    name: 'jueves'
  })
  jueves: 0 | 1;

  @Column({
    type: 'tinyint',
    name: 'viernes'
  })
  viernes: 0 | 1;

  @Column({
    type: 'tinyint',
    name: 'sabado'
  })
  sabado: 0 | 1;

  @Column({
    type: 'tinyint',
    name: 'domingo'
  })
  domingo: 0 | 1;
}
