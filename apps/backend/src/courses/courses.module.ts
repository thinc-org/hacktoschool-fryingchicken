import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EnrollsService } from '../enrolls/enrolls.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, EnrollsService],
  imports: [PrismaModule],
})
export class CoursesModule {}
