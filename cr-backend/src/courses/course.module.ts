import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseController } from './course.controller';
import { CourseService }  from './course.service';

import Course from './course.entities';
import Review from './review.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Course,Review]),],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
