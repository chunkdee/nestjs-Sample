import { Test, TestingModule } from '@nestjs/testing';
import { OrangeFe2Controller } from './orange-fe2.controller';
import { OrangeFe2Service } from './orange-fe2.service';

describe('OrangeFe2Controller', () => {
  let orangeFe2Controller: OrangeFe2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrangeFe2Controller],
      providers: [OrangeFe2Service],
    }).compile();

    orangeFe2Controller = app.get<OrangeFe2Controller>(OrangeFe2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orangeFe2Controller.getHello()).toBe('Hello World!');
    });
  });
});
