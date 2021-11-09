import { Test, TestingModule } from '@nestjs/testing';
import { EmrEncounterService } from './emr-encounter.service';

describe('EmrEncounterService', () => {
  let service: EmrEncounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmrEncounterService],
    }).compile();

    service = module.get<EmrEncounterService>(EmrEncounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
