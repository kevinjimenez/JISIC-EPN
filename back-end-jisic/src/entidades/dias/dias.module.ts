import { Module } from '@nestjs/common';
import { DiasController } from './dias.controller';
import { DiasService } from './dias.service';

@Module({
  controllers: [DiasController],
  providers: [DiasService]
})
export class DiasModule {}
