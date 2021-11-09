import { Test, TestingModule } from '@nestjs/testing';
import { PagaController } from './paga.controller';
import { PagaService } from './paga.service';

describe('PagaController', () => {
  let controller: PagaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagaController],
      providers: [PagaService],
    }).compile();

    controller = module.get<PagaController>(PagaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
