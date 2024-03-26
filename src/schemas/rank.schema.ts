import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CollegeData, CollegeSchema } from './data.schema'; // Assuming you have the CollegeData schema defined in a file called data.schema.ts

@Schema()
export class Rank {
    @Prop()
    rank: number;

    @Prop()
    score: number;

    @Prop()
    year: number;

    @Prop()
    budget: number;

    @Prop()
    category: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CollegeData' })
    college: CollegeData; // This will be used to reference the CollegeData schema
}

export const RankSchema = SchemaFactory.createForClass(Rank);
