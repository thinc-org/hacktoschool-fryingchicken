import { Module } from '@nestjs/common';
import { EnrollsService } from './enrolls.service';
import { EnrollsController } from './enrolls.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [EnrollsController],
  providers: [EnrollsService, UsersService],
  imports: [PrismaModule],
})
export class EnrollsModule {}
