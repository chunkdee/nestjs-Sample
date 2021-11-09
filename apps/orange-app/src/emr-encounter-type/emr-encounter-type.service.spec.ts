import { Test, TestingModule } from '@nestjs/testing';
import { EmrEncounterTypeService } from './emr-encounter-type.service';

describe('EmrEncounterTypeService', () => {
  let service: EmrEncounterTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmrEncounterTypeService],
    }).compile();

    service = module.get<EmrEncounterTypeService>(EmrEncounterTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
