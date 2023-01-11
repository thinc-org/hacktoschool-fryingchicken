import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  instructorName: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty({ default: false })
  active: boolean;
}
