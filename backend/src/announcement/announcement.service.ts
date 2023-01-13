import { Injectable } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnnouncementService {
  constructor(private prisma: PrismaService) {}
  create(createAnnouncementDto: CreateAnnouncementDto) {
    return this.prisma.announcement.create({ data: createAnnouncementDto });
  }

  findAll() {
    return this.prisma.announcement.findMany();
  }

  findOne(id: number) {
    return this.prisma.announcement.findUnique({ where: { id } });
  }

  findManyByCourse(id: number) {
    return this.prisma.announcement.findMany({ where: { courseId: id } });
  }

  update(id: number, updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.prisma.announcement.update({
      where: { id },
      data: updateAnnouncementDto,
    });
  }

  remove(id: number) {
    return this.prisma.announcement.delete({ where: { id } });
  }
}
