import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  //  FOR TEST
  // curl -X POST http://localhost:5679/auth/login -d '{"username": "user1", "password": "password1"}' -H "Content-Type: application/json"
  // curl http://localhost:5679/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwicm9sZSI6Imluc3RydWN0b3IiLCJpYXQiOjE2NzM0NDc2NzAsImV4cCI6MTY3MzQ1MTI3MH0.WXE6BS0oEzYJ5jvcNdEoIMns4WcZyLPIMA6vcimuL-E"

  @UseGuards(LocalAuthGuard)
  // @UseGuards(JwtAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  @Redirect('/api')
  getHello(): string {
    return this.appService.getHello();
  }
}
