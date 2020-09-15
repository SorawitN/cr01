import { ObjectID } from "mongodb";
import { IsNotEmpty } from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty()
    comment: string;
    
    score: number;
    courseID?: ObjectID;
}