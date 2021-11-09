import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmrEncounterClassService } from './emr-encounter-class.service';
import { EmrEncounterClass } from './entities/emr-encounter-class.entity';
import { Crud, CrudController } from '@nestjsx/crud';


@Crud({
  model: {
    type: EmrEncounterClass,
  },
})

@Controller('emr-encounter-class')
export class EmrEncounterClassController implements CrudController<EmrEncounterClass> {
  constructor(public service: EmrEncounterClassService) {}

  // @Post()
  // create(@Body() createEmrEncounterClassDto: CreateEmrEncounterClassDto) {
  //   return this.emrEncounterClassService.create(createEmrEncounterClassDto);
  // }

  // @Get()
  // findAll() {
  //   return this.emrEncounterClassService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.emrEncounterClassService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmrEncounterClassDto: UpdateEmrEncounterClassDto) {
  //   return this.emrEncounterClassService.update(+id, updateEmrEncounterClassDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.emrEncounterClassService.remove(+id);
  // }
}
