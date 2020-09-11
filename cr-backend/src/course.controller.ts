import { Controller, Get } from '@nestjs/common';

@Controller('frozen')
export class CourseController {

  @Get()
  findAll(): any {
    return {
        message:'hello world'
    };
  }
}
