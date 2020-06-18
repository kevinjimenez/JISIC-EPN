import { Module } from '@nestjs/common';
import { HorarioDiasService } from './horario-dias.service';
import { HorarioDiasController } from './horario-dias.controller';

@Module({
  providers: [HorarioDiasService],
  controllers: [HorarioDiasController]
})
export class HorarioDiasModule {}
