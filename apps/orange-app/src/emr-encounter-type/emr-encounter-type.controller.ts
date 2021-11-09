import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmrEncounterTypeService } from './emr-encounter-type.service';
import { EmrEncounterType } from './entities/emr-encounter-type.entity';
import { Crud, CrudController } from '@nestjsx/crud';


@Crud({
  model: {
    type: EmrEncounterType,
  },
})

@Controller('emr-encounter-type')
export class EmrEncounterTypeController implements CrudController<EmrEncounterType> {
  constructor(public service: EmrEncounterTypeService) {}

  // @Post()
  // create(@Body() createEmrEncounterTypeDto: CreateEmrEncounterTypeDto) {
  //   return this.emrEncounterTypeService.create(createEmrEncounterTypeDto);
  // }

  // @Get()
  // findAll() {
  //   return this.emrEncounterTypeService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.emrEncounterTypeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmrEncounterTypeDto: UpdateEmrEncounterTypeDto) {
  //   return this.emrEncounterTypeService.update(+id, updateEmrEncounterTypeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.emrEncounterTypeService.remove(+id);
  // }
}
