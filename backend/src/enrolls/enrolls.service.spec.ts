import { Test, TestingModule } from '@nestjs/testing';
import { EnrollsService } from './enrolls.service';

describe('EnrollsService', () => {
  let service: EnrollsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnrollsService],
    }).compile();

    service = module.get<EnrollsService>(EnrollsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
