import { Test, TestingModule } from '@nestjs/testing';
import { AnnouncementReadController } from './announcement-read.controller';
import { AnnouncementReadService } from './announcement-read.service';

describe('AnnouncementReadController', () => {
  let controller: AnnouncementReadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnouncementReadController],
      providers: [AnnouncementReadService],
    }).compile();

    controller = module.get<AnnouncementReadController>(AnnouncementReadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
