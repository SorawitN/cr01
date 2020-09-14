import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './courses/course.controller';
import { CourseService } from './courses/course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from './courses/course.entities';
import { CourseModule } from './courses/course.module';
import Review from './courses/review.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'Test_course',
      entities: [Course,Review],
      synchronize: true,
    }),

    CourseModule,

    TypeOrmModule.forFeature([Course]),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
