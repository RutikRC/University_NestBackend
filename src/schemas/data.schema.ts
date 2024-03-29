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

    @Prop()
    category: string;

    @Prop()
    r2021: string;

    @Prop()
    s2021: string;

    @Prop()
    r2022: string;

    @Prop()
    s2022: string;

    @Prop()
    budget: string;
}

export const CollegeSchema = SchemaFactory.createForClass(CollegeData);