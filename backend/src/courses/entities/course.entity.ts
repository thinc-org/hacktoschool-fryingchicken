import { Courses } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CoursesEntity implements Courses {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  instructorId: number;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ default: false })
  active: boolean;
}
