import { Controller, Get, Post, Body, HttpException, HttpStatus, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { ObjectID } from 'mongodb';

import Course from './course.entities';
import Review from './review.entities';
import { ParseObjectIDPipe } from '../common/pipes';

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
        return this.courseService.create(createCourseDto);
    }

    @Get(':courseID/reviews')
    async findAllReviews(@Param('courseID', ParseObjectIDPipe) courseID: ObjectID): Promise<Review[]> {
        return this.courseService.findAllReviews(courseID);
    }

    @Post(':courseID/reviews')
    async createReview(@Param('courseID', ParseObjectIDPipe) courseID: ObjectID,
        @Body() createReviewDto: CreateReviewDto) {
        createReviewDto.courseID = courseID;
        const NewReview = this.courseService.createReview(createReviewDto);
        return NewReview;
       
    }

}
