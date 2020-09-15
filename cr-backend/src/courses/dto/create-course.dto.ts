import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateCourseDto {
    @IsNotEmpty()
    title: string;

    @IsNumberString()
    number: string;
}