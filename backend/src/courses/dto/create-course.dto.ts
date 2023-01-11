import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  instructorId: number;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty({ default: false })
  active: boolean;
}
