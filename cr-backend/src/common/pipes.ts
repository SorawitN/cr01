import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectID } from 'mongodb';

@Injectable()
export class ParseObjectIDPipe implements PipeTransform<any, ObjectID>{

    public transform(value: any): ObjectID{
        try{
            const transformedObjectID: ObjectID = ObjectID.createFromHexString(value);
            return transformedObjectID;
        } catch (error){
            throw new BadRequestException('Validation failed(ObjectID is expected');
        }
    }
}