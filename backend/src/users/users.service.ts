import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const encodedPassword = await encodePassword(createUserDto.password);
    const encodedCreateUserDto: CreateUserDto = {
      ...createUserDto,
      password: encodedPassword,
    };
    return this.prisma.users.create({ data: encodedCreateUserDto });
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
