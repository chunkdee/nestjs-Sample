import { PartialType } from '@nestjs/swagger';
import { CreatePagaDto } from './create-paga.dto';

export class UpdatePagaDto extends PartialType(CreatePagaDto) {}
