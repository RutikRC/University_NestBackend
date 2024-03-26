import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICollege } from './college.interface';
import { CreateCollegeDto } from './dto/create-college.dto';
import { UpdateCollegeDto } from './dto/update-college.dto';

@Injectable()
export class CollegeService {
    constructor(@InjectModel('CollegeData') private readonly collegeModel: Model<ICollege>) {}

    async createCollege(createCollegeDto: CreateCollegeDto): Promise<ICollege> {
        const newCollege = await new this.collegeModel(createCollegeDto);
        return newCollege.save();
    }

    async updateCollege(collegeId: string, updateCollegeDto: UpdateCollegeDto): Promise<ICollege> {
        const existingCollege = await this.collegeModel.findByIdAndUpdate(collegeId, updateCollegeDto, { new: true });
        if (!existingCollege) {
            throw new NotFoundException(`College with id ${collegeId} not found`);
        }
        return existingCollege;
    }

    async getAllColleges(): Promise<ICollege[]> {
        return this.collegeModel.find().exec();
    }

    async getCollege(collegeId: string): Promise<ICollege> {
        const existingCollege = await this.collegeModel.findById(collegeId).exec();
        if (!existingCollege) {
            throw new NotFoundException(`College with id ${collegeId} not found`);
        }
        return existingCollege;
    }

    async deleteCollege(collegeId: string): Promise<ICollege> {
        const deletedCollege = await this.collegeModel.findByIdAndDelete(collegeId).exec();
        if (!deletedCollege) {
            throw new NotFoundException(`College with id ${collegeId} not found`);
        }
        return deletedCollege;
    }
}
