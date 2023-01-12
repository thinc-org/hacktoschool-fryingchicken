import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EnrollsService } from './enrolls.service';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { UpdateEnrollDto } from './dto/update-enroll.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { EnrollsEntity } from './entities/enroll.entity';

@Controller('enrolls')
@ApiTags('enrolls')
export class EnrollsController {
  constructor(private readonly enrollsService: EnrollsService) {}

  @Post()
  @ApiCreatedResponse({ type: EnrollsEntity })
  create(@Body() createEnrollDto: CreateEnrollDto) {
    return this.enrollsService.create(createEnrollDto);
  }

  @Get()
  @ApiOkResponse({ type: EnrollsEntity, isArray: true })
  findAll() {
    return this.enrollsService.findAll();
  }

  @Get('courseId/:courseId')
  @ApiOkResponse({ type: EnrollsEntity })
  findManyCourseId(@Param('courseId') courseId: string) {
    return this.enrollsService.findManyCourseId(+courseId);
  }

  @Get('username/:username')
  @ApiOkResponse({ type: EnrollsEntity })
  findManyUsername(@Param('username') username: string) {
    return this.enrollsService.findManyUsername(username);
  }

  @Patch(':id')
  @ApiOkResponse({ type: EnrollsEntity })
  update(@Param('id') id: string, @Body() updateEnrollDto: UpdateEnrollDto) {
    return this.enrollsService.update(+id, updateEnrollDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: EnrollsEntity })
  remove(@Param('id') id: string) {
    return this.enrollsService.remove(+id);
  }

  @Get('isEnrolled/:id?')
  @ApiOkResponse({ type: EnrollsEntity })
  checkIsEnrolled(
    @Param('id') id: string,
    @Query('username') username: string
  ) {
    return this.enrollsService.checkIsEnrolled(+id, username);
  }
}
