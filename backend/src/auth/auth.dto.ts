import { ApiProperty } from '@nestjs/swagger';

export class AccessTokenPayload {
  @ApiProperty()
  access_token: string;
}

export class JwtPayload {
  @ApiProperty()
  username: string;

  @ApiProperty()
  role: string;
}
