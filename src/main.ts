import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('OctoSoft')
    .setDescription('OctosSoft API')
    .setVersion('1.0')
    .addTag('octosoft')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v2', app, document);

  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  
}
bootstrap();




