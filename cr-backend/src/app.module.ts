import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from './entities/course.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'Test_course',
      entities: [Course],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Course]),
    ],
  controllers: [AppController,CourseController],
  providers: [AppService,CourseService],
})
export class AppModule {}
