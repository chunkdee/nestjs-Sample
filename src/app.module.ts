import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { PagaModule } from './paga/paga.module';

@Module({
  imports: [TodosModule, PagaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
