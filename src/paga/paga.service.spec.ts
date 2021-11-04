import { Test, TestingModule } from '@nestjs/testing';
import { PagaService } from './paga.service';

describe('PagaService', () => {
  let service: PagaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagaService],
    }).compile();

    service = module.get<PagaService>(PagaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
