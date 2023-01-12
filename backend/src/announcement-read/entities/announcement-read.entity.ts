import { AnnouncementRead } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AnnouncementReadEntity implements AnnouncementRead {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  courseId: number;

  @ApiProperty()
  announcementId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
