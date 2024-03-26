import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rank } from 'src/schemas/rank.schema';
import { CreateRankDto } from './dto/create-api.dto';
import { UpdateRankDto } from './dto/update-api.dto';
import { ICollege } from 'src/college/college.interface';


@Injectable()
export class RankService {
    constructor(@InjectModel('Rank') private readonly rankModel: Model<Rank>) {}

    async createRank(createRankDto: CreateRankDto): Promise<Rank> {
        const newRank = await new this.rankModel(createRankDto);
        return newRank.save();
    }

    async updateRank(rankId: string, updateRankDto: UpdateRankDto): Promise<Rank> {
        const existingRank = await this.rankModel.findByIdAndUpdate(rankId, updateRankDto, { new: true });
        if (!existingRank) {
            throw new NotFoundException(`Rank with id ${rankId} not found`);
        }
        return existingRank;
    }

    async getAllRanks(
        category?: string, 
        course?: string,
        college_type?: string,
        counselling_type?: string
    ): Promise<Rank[]> {
        let query = this.rankModel.find().populate({
            path: 'college',
            match: {}
        });
        
        if (category) {
            query = query.where('category').equals(category);
        }
    
        if (course) {
            query = query.populate({
                path: 'college',
                match: { course: course }
            });
        }
    
        if (college_type) {
            query = query.populate({
                path: 'college',
                match: { college_type: college_type }
            });
        }
    
        if (counselling_type) {
            query = query.populate({
                path: 'college',
                match: { counselling_type: counselling_type }
            });
        }
        
        // Executing the query
        const ranks = await query.exec();
        
        // Filtering out ranks with null college (if any)
        const filteredRanks = ranks.filter(rank => rank.college !== null);
        
        return filteredRanks;
    }

    async getRanksFilter(rank: number): Promise<Rank[]> {
        const fromRank = Number(rank) - 5000;
        // console.log(fromRank);
        // console.log(rank)
        const ranks = await this.rankModel.find({ rank: { $gte: fromRank } }).populate('college');
        if (!ranks) {
            throw new NotFoundException(`No ranks found above the threshold ${rank}`);
        }
        return ranks;
    }


    async getScoresFilter(score: number): Promise<Rank[]> {
        const threshold = Number(score) + 20; // Explicitly convert score to a number before addition
        // console.log(score);
        // console.log(threshold); // Log the threshold value to check
        const ranks = await this.rankModel.find({ score: { $lte: threshold } }).populate('college');
        
        if (!ranks || ranks.length === 0) {
            throw new NotFoundException(`No ranks found below the threshold score ${score}`);
        }
        return ranks;
    }

    async getBudgetsFilter(budget: number): Promise<Rank[]> {
        const temp = Number(budget) + 100000; // Adding 100000 to the provided budget value
        // console.log(budget);
        // console.log(threshold); // Log the threshold value to check
        const ranks = await this.rankModel.find({ budget: { $lte: temp } }).populate('college');
        
        if (!ranks || ranks.length === 0) {
            throw new NotFoundException(`No ranks found above the threshold budget ${budget}`);
        }
        return ranks;
    }

    async getRank(rankId: string): Promise<Rank> {
        const existingRank = await this.rankModel.findById(rankId).populate('college').exec();
        if (!existingRank) {
            throw new NotFoundException(`Rank with id ${rankId} not found`);
        }
        return existingRank;
    }

    async deleteRank(rankId: string): Promise<Rank> {
        const deletedRank = await this.rankModel.findByIdAndDelete(rankId).exec();
        if (!deletedRank) {
            throw new NotFoundException(`Rank with id ${rankId} not found`);
        }
        return deletedRank;
    }

    
}
