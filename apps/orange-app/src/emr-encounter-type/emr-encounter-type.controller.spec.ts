import { Test, TestingModule } from '@nestjs/testing';
import { EmrEncounterTypeController } from './emr-encounter-type.controller';
import { EmrEncounterTypeService } from './emr-encounter-type.service';

describe('EmrEncounterTypeController', () => {
  let controller: EmrEncounterTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmrEncounterTypeController],
      providers: [EmrEncounterTypeService],
    }).compile();

    controller = module.get<EmrEncounterTypeController>(EmrEncounterTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
