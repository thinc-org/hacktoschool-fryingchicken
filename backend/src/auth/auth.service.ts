import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/bcrypt';
import { AccessTokenPayload } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (!user) {
      throw new Error(`User ${username} not found`);
    }

    const isMatch =
      comparePassword(password, user.password) ||
      (user.password.length <= 30 && password === user.password);
    if (!isMatch) {
      throw new Error('Wrong Password');
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
  }

  async login(user: any): Promise<AccessTokenPayload> {
    const payload = { username: user.username, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
