import { Module } from '@nestjs/common';
import { ActividadService } from './actividad.service';
import { ActividadController } from './actividad.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ActividadRepository} from "./actividad.repository";

@Module({
  imports: [
      TypeOrmModule.forFeature([ActividadRepository])
  ],
  providers: [ActividadService],
  controllers: [ActividadController],
  exports: [ActividadService]
})
export class ActividadModule {}
