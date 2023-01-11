import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  //  FOR TEST
  // curl -X POST http://localhost:3000/auth/login -d '{"username": "user1", "password": "password1"}' -H "Content-Type: application/json"
  // curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwicm9sZSI6Imluc3RydWN0b3IiLCJpYXQiOjE2NzM0NDI2ODcsImV4cCI6MTY3MzQ0Mjc0N30.R0DWV2nKVgy1266Jza_cgbglIzBPwcKnieBP2XBSzEc"

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
  getHello(): string {
    return this.appService.getHello();
  }
}
