import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CreateEmrPatientDto } from './dto/create-emr-patient.dto';
import { UpdateEmrPatientDto } from './dto/update-emr-patient.dto';
import { EmrPatient } from './entities/emr-patient.entity';

@Injectable()
export class EmrPatientService extends TypeOrmCrudService<EmrPatient>  {

  constructor(@InjectRepository(EmrPatient) repo: any) {
    super(repo);
  }


  // create(createEmrPatientDto: CreateEmrPatientDto) {
  //   return 'This action adds a new emrPatient';
  // }

  // findAll() {
  //   return `This action returns all emrPatient`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} emrPatient`;
  // }

  // update(id: number, updateEmrPatientDto: UpdateEmrPatientDto) {
  //   return `This action updates a #${id} emrPatient`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} emrPatient`;
  // }
}
