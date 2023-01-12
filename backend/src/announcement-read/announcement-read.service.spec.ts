import { Test, TestingModule } from '@nestjs/testing';
import { AnnouncementReadService } from './announcement-read.service';

describe('AnnouncementReadService', () => {
  let service: AnnouncementReadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnouncementReadService],
    }).compile();

    service = module.get<AnnouncementReadService>(AnnouncementReadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
