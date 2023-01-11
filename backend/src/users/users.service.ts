import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(username: string) {
    return this.prisma.users.findUnique({ where: { username: username } });
  }

  update(username: string, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { username: username },
      data: updateUserDto,
    });
  }

  remove(username: string) {
    return this.prisma.users.delete({ where: { username: username } });
  }
}
