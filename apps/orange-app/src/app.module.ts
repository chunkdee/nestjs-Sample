import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { PagaModule } from './paga/paga.module';
import { CaslModule } from './casl/casl.module';
import { UsersModule } from './users/users.module';
import { EmrEncounterModule } from './emr-encounter/emr-encounter.module';
import { EmrEncounterTypeModule } from './emr-encounter-type/emr-encounter-type.module';
import { EmrEncounterClassModule } from './emr-encounter-class/emr-encounter-class.module';
import { EmrPatientModule } from './emr-patient/emr-patient.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';

@Module({
  imports: [TodosModule, PagaModule, CaslModule, UsersModule,
    ConfigModule.forRoot({
      isGlobal: true
   }),
     EmrEncounterModule, EmrEncounterTypeModule, EmrEncounterClassModule, EmrPatientModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
