import { ApiProperty } from '@nestjs/swagger';

export class CreateEnrollDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  courseId: number;
}
