import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AnnouncementReadService } from './announcement-read.service';
import { CreateAnnouncementReadDto } from './dto/create-announcement-read.dto';
import { UpdateAnnouncementReadDto } from './dto/update-announcement-read.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AnnouncementReadEntity } from './entities/announcement-read.entity';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('announcement-read')
@ApiTags('annoucement-read')
export class AnnouncementReadController {
  constructor(
    private readonly announcementReadService: AnnouncementReadService
  ) {}

  @Post()
  @ApiCreatedResponse({ type: AnnouncementReadEntity })
  create(@Body() createAnnouncementReadDto: CreateAnnouncementReadDto) {
    return this.announcementReadService.create(createAnnouncementReadDto);
  }

  @Get()
  @ApiOkResponse({ type: AnnouncementReadEntity, isArray: true })
  findAll() {
    return this.announcementReadService.findAll();
  }

  @Get('byUsername')
  @ApiOkResponse({ type: AnnouncementReadEntity, isArray: true })
  @UseGuards(JwtAuthGuard)
  findManyByUser(@Request() req) {
    return this.announcementReadService.findManyByUser(req.user.username);
  }

  @Get('byCourse/:courseId')
  @ApiOkResponse({ type: AnnouncementReadEntity, isArray: true })
  findManyByCourse(@Param('courseId') id: string) {
    return this.announcementReadService.findManyByCourse(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AnnouncementReadEntity })
  update(
    @Param('id') id: string,
    @Body() updateAnnouncementReadDto: UpdateAnnouncementReadDto
  ) {
    return this.announcementReadService.update(+id, updateAnnouncementReadDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AnnouncementReadEntity })
  remove(@Param('id') id: string) {
    return this.announcementReadService.remove(+id);
  }
}
