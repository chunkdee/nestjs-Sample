import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EmrEncounterType } from './entities/emr-encounter-type.entity';

@Injectable()
export class EmrEncounterTypeService extends TypeOrmCrudService<EmrEncounterType>  {

  constructor(@InjectRepository(EmrEncounterType) repo: any) {
    super(repo);
  }

  // create(createEmrEncounterTypeDto: CreateEmrEncounterTypeDto) {
  //   return 'This action adds a new emrEncounterType';
  // }

  // findAll() {
  //   return `This action returns all emrEncounterType`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} emrEncounterType`;
  // }

  // update(id: number, updateEmrEncounterTypeDto: UpdateEmrEncounterTypeDto) {
  //   return `This action updates a #${id} emrEncounterType`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} emrEncounterType`;
  // }
}
