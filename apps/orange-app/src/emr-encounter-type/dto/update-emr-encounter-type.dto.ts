import { PartialType } from '@nestjs/swagger';
import { CreateEmrEncounterTypeDto } from './create-emr-encounter-type.dto';

export class UpdateEmrEncounterTypeDto extends PartialType(CreateEmrEncounterTypeDto) {}
