import { Test, TestingModule } from '@nestjs/testing';
import { EmrPatientService } from './emr-patient.service';

describe('EmrPatientService', () => {
  let service: EmrPatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmrPatientService],
    }).compile();

    service = module.get<EmrPatientService>(EmrPatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
