import { NestFactory } from '@nestjs/core';
import { OrangeFe2Module } from './orange-fe2.module';

async function bootstrap() {
  const app = await NestFactory.create(OrangeFe2Module);
  await app.listen(3000);
}
bootstrap();
