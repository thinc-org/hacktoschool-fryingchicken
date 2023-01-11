import { Module } from '@nestjs/common';
import { EnrollsService } from './enrolls.service';
import { EnrollsController } from './enrolls.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EnrollsController],
  providers: [EnrollsService],
  imports: [PrismaModule],
})
export class EnrollsModule {}
