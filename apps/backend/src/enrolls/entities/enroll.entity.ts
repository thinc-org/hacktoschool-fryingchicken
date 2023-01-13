import { Enrolls } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EnrollsEntity implements Enrolls {
  @ApiProperty()
  id: number;

  @ApiProperty()
  courseId: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;
}
