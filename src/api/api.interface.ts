import { Document } from 'mongoose';
import { ICollege } from 'src/college/college.interface'; // Assuming you have the College interface defined in another file

export interface Rank extends Document {
    rank: string;
    score: string;
    year: string;
    budget: string;
    category: string;
    college: ICollege['_id']; // Assuming College interface has _id property
}
