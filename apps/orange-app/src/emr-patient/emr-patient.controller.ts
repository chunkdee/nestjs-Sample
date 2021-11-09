import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmrPatientService } from './emr-patient.service';
import { CreateEmrPatientDto } from './dto/create-emr-patient.dto';
import { UpdateEmrPatientDto } from './dto/update-emr-patient.dto';
import { EmrPatient } from './entities/emr-patient.entity';
import { Crud, CrudController } from '@nestjsx/crud';


@Crud({
  model: {
    type: EmrPatient,
  },
})

@Controller('emr-patient')
export class EmrPatientController implements CrudController<EmrPatient> {
  constructor(public service: EmrPatientService) {}

  // @Post()
  // create(@Body() createEmrPatientDto: CreateEmrPatientDto) {
  //   return this.emrPatientService.create(createEmrPatientDto);
  // }

  // @Get()
  // findAll() {
  //   return this.emrPatientService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.emrPatientService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmrPatientDto: UpdateEmrPatientDto) {
  //   return this.emrPatientService.update(+id, updateEmrPatientDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.emrPatientService.remove(+id);
  // }
}
