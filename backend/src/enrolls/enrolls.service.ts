import { Injectable } from '@nestjs/common';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { UpdateEnrollDto } from './dto/update-enroll.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnrollsService {
  constructor(private prisma: PrismaService) {}
  create(createEnrollDto: CreateEnrollDto) {
    return this.prisma.enrolls.create({ data: createEnrollDto });
  }

  findAll() {
    return this.prisma.enrolls.findMany();
  }

  findOne(id: number) {
    return this.prisma.enrolls.findUnique({ where: { id } });
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
}
