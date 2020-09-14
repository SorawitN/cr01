import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import  Course  from './course.entities';
import { CourseService } from './course.service';
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

}
