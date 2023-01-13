import { Injectable } from '@nestjs/common';
import { CreateAnnouncementReadDto } from './dto/create-announcement-read.dto';
import { UpdateAnnouncementReadDto } from './dto/update-announcement-read.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnnouncementReadService {
  constructor(private prisma: PrismaService) {}
  create(createAnnouncementReadDto: CreateAnnouncementReadDto) {
    return this.prisma.announcementRead.create({
      data: createAnnouncementReadDto,
    });
  }

  findAll() {
    return this.prisma.announcementRead.findMany();
  }

  findOne(id: number) {
    return this.prisma.announcementRead.findUnique({ where: { id } });
  }

  findManyByUser(username: string) {
    return this.prisma.announcementRead.findMany({
      where: { username: username },
      include: { announcement: true },
    });
  }

  findManyByAnnouncement(id: number) {
    return this.prisma.announcementRead.findMany({
      where: { announcementId: id },
      include: { announcement: true },
    });
  }

  update(id: number, updateAnnouncementReadDto: UpdateAnnouncementReadDto) {
    return this.prisma.announcementRead.update({
      where: { id },
      data: updateAnnouncementReadDto,
    });
  }

  remove(id: number) {
    return this.prisma.announcementRead.delete({ where: { id } });
  }
}
