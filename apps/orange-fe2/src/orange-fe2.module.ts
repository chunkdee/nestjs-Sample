import { Module } from '@nestjs/common';
import { OrangeFe2Controller } from './orange-fe2.controller';
import { OrangeFe2Service } from './orange-fe2.service';

@Module({
  imports: [],
  controllers: [OrangeFe2Controller],
  providers: [OrangeFe2Service],
})
export class OrangeFe2Module {}
