import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CoursesEntity } from './entities/course.entity';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @ApiCreatedResponse({ type: CoursesEntity })
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOkResponse({ type: CoursesEntity, isArray: true })
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CoursesEntity })
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Get('courseName/:name')
  @ApiOkResponse({ type: CoursesEntity })
  fineManyCourseName(@Param('name') name: string) {
    return this.coursesService.findManyCourseName(name);
  }

  @Get('instructorName/:name')
  @ApiOkResponse({ type: CoursesEntity })
  fineManyInstructorName(@Param('name') name: string) {
    return this.coursesService.findManyInstructorName(name);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CoursesEntity })
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CoursesEntity })
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
