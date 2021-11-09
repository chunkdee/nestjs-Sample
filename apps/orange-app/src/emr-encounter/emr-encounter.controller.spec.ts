import { Test, TestingModule } from '@nestjs/testing';
import { EmrEncounterController } from './emr-encounter.controller';
import { EmrEncounterService } from './emr-encounter.service';

describe('EmrEncounterController', () => {
  let controller: EmrEncounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmrEncounterController],
      providers: [EmrEncounterService],
    }).compile();

    controller = module.get<EmrEncounterController>(EmrEncounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
