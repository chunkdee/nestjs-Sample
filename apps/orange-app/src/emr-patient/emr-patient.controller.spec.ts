import { Test, TestingModule } from '@nestjs/testing';
import { EmrPatientController } from './emr-patient.controller';
import { EmrPatientService } from './emr-patient.service';

describe('EmrPatientController', () => {
  let controller: EmrPatientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmrPatientController],
      providers: [EmrPatientService],
    }).compile();

    controller = module.get<EmrPatientController>(EmrPatientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
