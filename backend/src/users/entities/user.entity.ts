import { Users } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UsersEntity implements Users {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ default: 'student' })
  role: string;

  @ApiProperty({ default: false })
  active: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
