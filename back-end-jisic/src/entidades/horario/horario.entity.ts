import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('horario')
export class HorarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'inicio_hora_manana',
  })
  inicioHoraManana: string;

  @Column({
    type: 'varchar',
    name: 'fin_hora_manana'
  })
  finHoraManana: string;

  @Column({
    type: 'varchar',
    name: 'inicio_hora_tarde'
  })
  inicioHoraTarde: string;

  @Column({
    type: 'varchar',
    name: 'fin_hora_tarde'
  })
  finHoraTarde: string;

  @Column({
    type: 'varchar',
    name: 'inicio_hora_noche'
  })
  inicioHoraNoche: string;

  @Column({
    type: 'varchar',
    name: 'fin_hora_noche'
  })
  finHoraNoche: string;

}
