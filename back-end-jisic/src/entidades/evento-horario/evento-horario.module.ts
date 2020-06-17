import { Module } from '@nestjs/common';
import { EventoHorarioService } from './evento-horario.service';
import { EventoHorarioController } from './evento-horario.controller';

@Module({
  providers: [EventoHorarioService],
  controllers: [EventoHorarioController]
})
export class EventoHorarioModule {}
