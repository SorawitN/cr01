import { Controller, Get } from '@nestjs/common';
import { Course } from './interface/course.interface';
import { CourseService } from './course.service';

@Controller('Course')
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Get()
    async findAll(): Promise<Course[]> {
        return this.courseService.findAll();
    }

}
