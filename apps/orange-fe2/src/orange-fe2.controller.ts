import { Controller, Get } from '@nestjs/common';
import { OrangeFe2Service } from './orange-fe2.service';

@Controller()
export class OrangeFe2Controller {
  constructor(private readonly orangeFe2Service: OrangeFe2Service) {}

  @Get()
  getHello(): string {
    return this.orangeFe2Service.getHello();
  }
}
