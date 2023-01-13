import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { UpdateEnrollDto } from './dto/update-enroll.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/auth/roles/role.enum';

@Injectable()
export class EnrollsService {
  constructor(private prisma: PrismaService) {}
  async create(createEnrollDto: CreateEnrollDto) {
    const { username, courseId } = createEnrollDto;
    const res = await this.prisma.enrolls.findFirst({
      where: { username: username, courseId: courseId },
    });

    // User already enrolled this course
    if (!!res) {
      throw new BadRequestException('User already enrolled this course');
    }

    return this.prisma.enrolls.create({ data: createEnrollDto });
  }

  findAll() {
    return this.prisma.enrolls.findMany();
  }

  findManyCourseId(courseId: number) {
    return this.prisma.enrolls.findMany({ where: { courseId } });
  }

  async findManyUsername(username: string, role: Role) {
    if (role === 'student') {
      return this.prisma.enrolls.findMany({
        where: { username: username },
        include: { course: true },
      });
    }

    // Get the number of
    const studentCount = await this.prisma.enrolls.groupBy({
      by: ['courseId'],
      _count: {
        username: true,
      },
    });
    let arr = [];
    for (let d of studentCount) {
      const course = await this.prisma.enrolls.findFirst({
        where: { courseId: d.courseId, username: username },
        include: { course: true },
      });
      if (!!course) arr.push({ ...course, studentCount: d['_count'].username });
    }
    return arr;
  }

  update(id: number, updateEnrollDto: UpdateEnrollDto) {
    return this.prisma.enrolls.update({
      where: { id },
      data: updateEnrollDto,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }

  async checkIsEnrolled(id: number, username: string) {
    const res = await this.prisma.enrolls.findFirst({
      where: { courseId: id, username: username },
    });
    return !!res;
  }
}
