import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


@Schema()
export class CollegeData {

    @Prop()
    code: string;

    @Prop()
    college_name: string;

    @Prop()
    course: string;

    @Prop()
    college_type: string;

    @Prop()
    counselling_type: string;
}

export const CollegeSchema = SchemaFactory.createForClass(CollegeData);