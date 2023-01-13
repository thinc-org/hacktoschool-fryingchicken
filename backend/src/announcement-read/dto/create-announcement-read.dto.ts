import { ApiProperty } from '@nestjs/swagger';

export class CreateAnnouncementReadDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  announcementId: number;

  @ApiProperty()
  isRead: boolean;
}
