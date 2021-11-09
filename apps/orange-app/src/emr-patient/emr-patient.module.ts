import { Module } from '@nestjs/common';
import { EmrPatientService } from './emr-patient.service';
import { EmrPatientController } from './emr-patient.controller';
import { EmrPatient } from './entities/emr-patient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmrPatient])],
  controllers: [EmrPatientController],
  providers: [EmrPatientService]
})
export class EmrPatientModule {}
