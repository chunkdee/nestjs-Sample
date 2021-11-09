import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EmrEncounter } from './entities/emr-encounter.entity';

@Injectable()
export class EmrEncounterService extends TypeOrmCrudService<EmrEncounter> {
  
  constructor(@InjectRepository(EmrEncounter) repo: any) {
         super(repo);
  }

  // create(createEmrEncounterDto: CreateEmrEncounterDto) {
  //   return 'This action adds a new emrEncounter';
  // }

  // findAll() {
  //   return `This action returns all emrEncounter`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} emrEncounter`;
  // }

  // update(id: number, updateEmrEncounterDto: UpdateEmrEncounterDto) {
  //   return `This action updates a #${id} emrEncounter`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} emrEncounter`;
  // }
}
