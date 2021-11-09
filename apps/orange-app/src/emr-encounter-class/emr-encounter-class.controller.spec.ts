import { Test, TestingModule } from '@nestjs/testing';
import { EmrEncounterClassController } from './emr-encounter-class.controller';
import { EmrEncounterClassService } from './emr-encounter-class.service';

describe('EmrEncounterClassController', () => {
  let controller: EmrEncounterClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmrEncounterClassController],
      providers: [EmrEncounterClassService],
    }).compile();

    controller = module.get<EmrEncounterClassController>(EmrEncounterClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
