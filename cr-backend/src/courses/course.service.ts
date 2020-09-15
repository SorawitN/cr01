import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import  Course  from './course.entities';
import Review from './review.entities';
import { ObjectID } from 'mongodb';

import { CreateCourseDto } from './dto/create-course.dto';
import { CreateReviewDto } from './dto/create-review.dto';

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

    async findAllReviews(courseID: ObjectID): Promise<Review[]> {
        return this.reviewRepository.find({where:{ courseID: new ObjectID(courseID) }});
    }

    async createReview(createReviewDto: CreateReviewDto) {
        return this.reviewRepository.save(createReviewDto);
    }
}