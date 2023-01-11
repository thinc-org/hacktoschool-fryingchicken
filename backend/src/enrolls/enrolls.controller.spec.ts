import { Test, TestingModule } from '@nestjs/testing';
import { EnrollsController } from './enrolls.controller';
import { EnrollsService } from './enrolls.service';

describe('EnrollsController', () => {
  let controller: EnrollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrollsController],
      providers: [EnrollsService],
    }).compile();

    controller = module.get<EnrollsController>(EnrollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
