import { Module } from '@nestjs/common';
import { AnnouncementReadService } from './announcement-read.service';
import { AnnouncementReadController } from './announcement-read.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AnnouncementReadController],
  providers: [AnnouncementReadService],
  imports: [PrismaModule],
})
export class AnnouncementReadModule {}
