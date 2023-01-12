import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnouncementReadService } from './announcement-read.service';
import { CreateAnnouncementReadDto } from './dto/create-announcement-read.dto';
import { UpdateAnnouncementReadDto } from './dto/update-announcement-read.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AnnouncementReadEntity } from './entities/announcement-read.entity';

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

  @Get(':id')
  @ApiOkResponse({ type: AnnouncementReadEntity })
  findOne(@Param('id') id: string) {
    return this.announcementReadService.findOne(+id);
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
