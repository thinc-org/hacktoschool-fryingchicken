import { ApiOperation, ApiProperty } from '@nestjs/swagger';

export class CreateAnnouncementReadDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  courseId: number;

  @ApiProperty()
  announcementId: number;
}
