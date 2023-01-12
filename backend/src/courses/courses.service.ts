import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EnrollsService } from 'src/enrolls/enrolls.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}
  create(createCourseDto: CreateCourseDto) {
    return this.prisma.courses.create({ data: createCourseDto });
  }

  async findAll() {
    const res = await this.prisma.enrolls.groupBy({
      by: ['courseId'],
      _count: {
        username: true,
      },
    });

    let arr = [];
    for (let d of res) {
      const course = await this.prisma.courses.findFirst({
        where: { id: d.courseId },
      });
      let res3 = { ...course, studentCount: d['_count'].username };
      arr.push(res3);
    }
    return arr;
  }

  findOne(id: number) {
    return this.prisma.courses.findUnique({ where: { id } });
  }

  findManyCourseName(name: string) {
    return this.prisma.courses.findMany({ where: { name: name } });
  }

  findManyInstructorName(name: string) {
    return this.prisma.courses.findMany({ where: { instructorName: name } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prisma.courses.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: number) {
    return this.prisma.courses.delete({ where: { id } });
  }
}
