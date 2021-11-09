import { PartialType } from '@nestjs/swagger';
import { CreateEmrEncounterDto } from './create-emr-encounter.dto';

export class UpdateEmrEncounterDto extends PartialType(CreateEmrEncounterDto) {}
