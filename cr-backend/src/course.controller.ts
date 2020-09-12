import { Controller, Get } from '@nestjs/common';

@Controller('frozen')
export class CourseController {

  @Get()
  findAll(): any {
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
