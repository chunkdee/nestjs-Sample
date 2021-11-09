import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EmrEncounterClass } from './entities/emr-encounter-class.entity';

@Injectable()
export class EmrEncounterClassService extends TypeOrmCrudService<EmrEncounterClass>  {

  constructor(@InjectRepository(EmrEncounterClass) repo: any) {
    super(repo);
  }


  // create(createEmrEncounterClassDto: CreateEmrEncounterClassDto) {
  //   return 'This action adds a new emrEncounterClass';
  // }

  // findAll() {
  //   return `This action returns all emrEncounterClass`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} emrEncounterClass`;
  // }

  // update(id: number, updateEmrEncounterClassDto: UpdateEmrEncounterClassDto) {
  //   return `This action updates a #${id} emrEncounterClass`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} emrEncounterClass`;
  // }
}
