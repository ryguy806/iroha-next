import { Test, TestingModule } from '@nestjs/testing';
import { IrohaController } from './iroha.controller';

describe('IrohaController', () => {
  let controller: IrohaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IrohaController],
    }).compile();

    controller = module.get<IrohaController>(IrohaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
