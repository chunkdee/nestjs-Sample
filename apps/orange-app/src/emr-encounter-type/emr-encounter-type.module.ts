import { Module } from '@nestjs/common';
import { EmrEncounterTypeService } from './emr-encounter-type.service';
import { EmrEncounterTypeController } from './emr-encounter-type.controller';
import { EmrEncounterType } from './entities/emr-encounter-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmrEncounterType])],
  controllers: [EmrEncounterTypeController],
  providers: [EmrEncounterTypeService]
})
export class EmrEncounterTypeModule {}
