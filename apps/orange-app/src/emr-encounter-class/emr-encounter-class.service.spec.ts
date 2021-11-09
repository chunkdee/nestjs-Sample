import { Test, TestingModule } from '@nestjs/testing';
import { EmrEncounterClassService } from './emr-encounter-class.service';

describe('EmrEncounterClassService', () => {
  let service: EmrEncounterClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmrEncounterClassService],
    }).compile();

    service = module.get<EmrEncounterClassService>(EmrEncounterClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
