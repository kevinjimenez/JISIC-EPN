import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ticket')
export class TicketEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'codigo'
  })
  codigo: string;

  @Column({
    type: 'tinyint',
    name: 'es_break'
  })
  esBreak: 0 | 1;

  @Column({
    type: 'tinyint',
    name: 'es_unico'
  })
  esUnico: 0 | 1;

  @Column({
    type: 'tinyint',
    name: 'usado'
  })
  usado: 0 | 1;

}
