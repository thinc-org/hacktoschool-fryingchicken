import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnrollsService } from './enrolls.service';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { UpdateEnrollDto } from './dto/update-enroll.dto';

@Controller('enrolls')
export class EnrollsController {
  constructor(private readonly enrollsService: EnrollsService) {}

  @Post()
  create(@Body() createEnrollDto: CreateEnrollDto) {
    return this.enrollsService.create(createEnrollDto);
  }

  @Get()
  findAll() {
    return this.enrollsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrollsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrollDto: UpdateEnrollDto) {
    return this.enrollsService.update(+id, updateEnrollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrollsService.remove(+id);
  }
}
