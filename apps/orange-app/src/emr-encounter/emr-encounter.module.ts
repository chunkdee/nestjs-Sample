import { Module } from '@nestjs/common';
import { EmrEncounterService } from './emr-encounter.service';
import { EmrEncounterController } from './emr-encounter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmrEncounter } from './entities/emr-encounter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmrEncounter])],
  controllers: [EmrEncounterController],
  providers: [EmrEncounterService]
})
export class EmrEncounterModule {}
