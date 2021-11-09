import { PartialType } from '@nestjs/swagger';
import { CreateEmrPatientDto } from './create-emr-patient.dto';

export class UpdateEmrPatientDto extends PartialType(CreateEmrPatientDto) {}
