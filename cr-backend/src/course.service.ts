import { Injectable } from '@nestjs/common';
import { Course } from './interface/course.interface';

@Injectable()
export class CourseService {
    async findAll(): Promise<Course[]> {
        return [
            {
            id: '100',
            number: '01204111',
            title: 'Programming'
            },
            {
            id: '200',
            number: '01204211',
            title: 'Discreate Math'
            },
            {
            id: '300',
            number: '01204313',
            title: 'Design and Analysis'
            },
        ];
    }
}