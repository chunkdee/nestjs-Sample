import { PartialType } from '@nestjs/swagger';
import { CreateEmrEncounterClassDto } from './create-emr-encounter-class.dto';

export class UpdateEmrEncounterClassDto extends PartialType(CreateEmrEncounterClassDto) {}
