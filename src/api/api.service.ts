import * as fs from 'fs';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as xlsx from 'xlsx';
import { CollegeData } from 'src/schemas/data.schema';
import { CreateCollegeDto } from './dto/create-data.dto';

@Injectable()
export class CollegeDataService {
  private readonly logger = new Logger(CollegeDataService.name);

  constructor(
    @InjectModel(CollegeData.name) private readonly collegeModel: Model<CollegeData>,
  ) {}

  async uploadXLSX(file: Express.Multer.File, sheetName: string): Promise<void> {
    this.logger.log(`Received file: ${JSON.stringify(file)}`); // Log the file object

    if (!file || !file.path) {
      throw new Error('Invalid file object');
    }

    const workbook = xlsx.readFile(file.path);
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

    try {
      await this.deleteAllData(); // Delete existing data before inserting new data
      await this.saveData(data); // Call saveData function to save new data to the database
    } catch (error) {
      throw new Error(`Failed to save data: ${error.message}`);
    }
  }

  async saveData(data: any[]): Promise<void> {
    const createCollegeDto: CreateCollegeDto[] = data.map((item) => {
      return {
        code: item['Code'],
        college_name: item['College Name'],
        course: item['Course'],
        college_type: item['College Type'],
        counselling_type: item['Counselling Type'],
        category: item['Category'],
        r2021: item['Rank 2021'],
        s2021: item['Score 2021'],
        r2022: item['Rank 2022'],
        s2022: item['Score 2022'],
        budget: String(item['Budget only tuition fees + Development fees']),
      };
    });

    try {
      await this.collegeModel.insertMany(createCollegeDto); // Insert data into the database
    } catch (error) {
      throw new Error(`Failed to insert data into the database: ${error.message}`);
    }
  }

  async deleteAllData() {
    return this.collegeModel.deleteMany({}).exec();
  }

  async getAllData() {
    return this.collegeModel.find().exec();
  }

  async getDataById(id: string) {
    return this.collegeModel.findById(id).exec();
  }
}
