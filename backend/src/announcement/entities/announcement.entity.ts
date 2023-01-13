import { Announcement } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AnnouncementEntity implements Announcement {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  courseId: number;

  @ApiProperty()
  courseName: string;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;
}
