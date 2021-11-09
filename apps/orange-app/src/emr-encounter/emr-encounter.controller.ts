import { Controller } from '@nestjs/common';
import { EmrEncounterService } from './emr-encounter.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { EmrEncounter } from './entities/emr-encounter.entity';


@Crud({
  model: {
    type: EmrEncounter,
  },
})


@Controller('emr-encounter')
export class EmrEncounterController implements CrudController<EmrEncounter> {
  constructor(public service : EmrEncounterService) {}

  // @Post()
  // create(@Body() createEmrEncounterDto: CreateEmrEncounterDto) {
  //   return this.emrEncounterService.create(createEmrEncounterDto);
  // }

  // @Get()
  // findAll() {
  //   return this.emrEncounterService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.emrEncounterService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmrEncounterDto: UpdateEmrEncounterDto) {
  //   return this.emrEncounterService.update(+id, updateEmrEncounterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.emrEncounterService.remove(+id);
  // }
}
