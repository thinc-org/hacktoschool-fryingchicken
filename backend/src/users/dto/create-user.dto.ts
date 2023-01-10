import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty({ default: 'student' })
  role: string;

  @ApiProperty({ default: false })
  active: boolean;
}
