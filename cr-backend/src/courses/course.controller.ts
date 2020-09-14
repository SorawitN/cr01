import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { ObjectID } from 'mongodb';

import Course from './course.entities';
import Review from './review.entities';

import { CreateReviewDto } from './dto/create-review.dto';
import { CreateCourseDto } from './dto/create-course.dto';


@Controller('Course')
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Get()
    async findAll(): Promise<Course[]> {
        return this.courseService.findAll();
    }

    @Post()
    async create(@Body() createCourseDto: CreateCourseDto) {
        if ((createCourseDto.number !== undefined) && (createCourseDto.title !== undefined)){
            const NewCourse = this.courseService.create(createCourseDto);
            return NewCourse;
        } else {
            throw new HttpException('Bad fucking request', HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':courseID/reviews')
    async findAllReviews(@Param('courseID') courseID: string): Promise<Review[]> {
        return this.courseService.findAllReviews(courseID);
    }

    @Post(':courseID/reviews')
    async createReview(@Param('courseID') courseID: string,
        @Body() createReviewDto: CreateReviewDto) {
        if ((createReviewDto.score !== undefined) && (createReviewDto.comment !== undefined)){
            createReviewDto.courseID = new ObjectID(courseID);
            const NewReview = this.courseService.createReview(createReviewDto);
            return NewReview;
        } else {
            throw new HttpException('Bad fucking request', HttpStatus.BAD_REQUEST);
        }
    }

}
