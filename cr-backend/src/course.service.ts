import { Injectable } from '@nestjs/common';
import  Course  from './entities/course.entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course) 
        private coursesRepository: Repository<Course>
    ) {}


    async findAll(): Promise<Course[]> {
        return this.coursesRepository.find();
        /*
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
        ];*/
    }
}