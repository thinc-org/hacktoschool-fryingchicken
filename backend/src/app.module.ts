import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URL), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
