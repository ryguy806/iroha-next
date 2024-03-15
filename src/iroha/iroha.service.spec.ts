import { Test, TestingModule } from '@nestjs/testing';
import { IrohaService } from './iroha.service';

describe('IrohaService', () => {
  let service: IrohaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IrohaService],
    }).compile();

    service = module.get<IrohaService>(IrohaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
