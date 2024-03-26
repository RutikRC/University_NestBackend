import { Document } from 'mongoose';

export interface ICollege extends Document {
  code: string;
  college_name: string;
  course: string;
  college_type: string;
  counselling_type: string;
}