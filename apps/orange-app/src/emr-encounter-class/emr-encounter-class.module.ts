import { Module } from '@nestjs/common';
import { EmrEncounterClassService } from './emr-encounter-class.service';
import { EmrEncounterClassController } from './emr-encounter-class.controller';
import { EmrEncounterClass } from './entities/emr-encounter-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmrEncounterClass])],
  controllers: [EmrEncounterClassController],
  providers: [EmrEncounterClassService]
})
export class EmrEncounterClassModule {}
