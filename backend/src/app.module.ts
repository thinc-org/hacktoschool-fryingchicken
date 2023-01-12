import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { EnrollsModule } from './enrolls/enrolls.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { AnnouncementReadModule } from './announcement-read/announcement-read.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    EnrollsModule,
    CoursesModule,
    AuthModule,
    AnnouncementModule,
    AnnouncementReadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
