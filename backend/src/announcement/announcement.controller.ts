import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AnnouncementEntity } from './entities/announcement.entity';

@Controller('announcement')
@ApiTags('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  @ApiCreatedResponse({ type: AnnouncementEntity })
  create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementService.create(createAnnouncementDto);
  }

  @Get()
  @ApiOkResponse({ type: AnnouncementEntity, isArray: true })
  findAll() {
    return this.announcementService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AnnouncementEntity })
  findOne(@Param('id') id: string) {
    return this.announcementService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AnnouncementEntity })
  update(
    @Param('id') id: string,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto
  ) {
    return this.announcementService.update(+id, updateAnnouncementDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AnnouncementEntity })
  remove(@Param('id') id: string) {
    return this.announcementService.remove(+id);
  }
}
