import { ApiProperty } from '@nestjs/swagger';
import { Role } from './roles/role.enum';

export class AccessTokenPayload {
  @ApiProperty()
  access_token: string;
}

export class JwtPayload {
  @ApiProperty()
  username: string;

  @ApiProperty()
  role: Role;
}
