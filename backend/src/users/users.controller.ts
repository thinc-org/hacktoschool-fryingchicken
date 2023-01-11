import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { UsersEntity } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UsersEntity })
  create(@Body() createUserDto: CreateUserDto) {
    console.log('Wow, JomnoiZ is here!!!', createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: UsersEntity, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  @ApiOkResponse({ type: UsersEntity })
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Patch(':id')
  @ApiOkResponse({ type: UsersEntity })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UsersEntity })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
