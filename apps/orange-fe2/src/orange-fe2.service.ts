import { Injectable } from '@nestjs/common';

@Injectable()
export class OrangeFe2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
