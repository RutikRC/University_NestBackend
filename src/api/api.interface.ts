import { Document } from 'mongoose';

export interface ICollegeData extends Document {
    code: string;
    college_name: string;
    course: string;
    college_type: string;
    counselling_type: string;
    category: string;
    r2021: string;
    s2021: string;
    r2022: string;
    s2022: string;
    budget: string;
}
