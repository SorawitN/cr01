import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';

import  Course  from './course.entities';
import Review from './review.entities';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course) 
        private coursesRepository: Repository<Course>,
        @InjectRepository(Review) 
        private reviewRepository: Repository<Review>,
    ) {}


    async findAll(): Promise<Course[]> {
        return this.coursesRepository.find();
    }

    async create(createCourseDto: CreateCourseDto) {
        return this.coursesRepository.save(createCourseDto);
    }

    async findAllReviews(courseID: string): Promise<Review[]> {
        return this.reviewRepository.find({where:{ courseID: courseID }});
    }
}