import { Module } from '@nestjs/common';
import { PagaService } from './paga.service';
import { PagaController } from './paga.controller';

@Module({
  controllers: [PagaController],
  providers: [PagaService]
})
export class PagaModule {}
