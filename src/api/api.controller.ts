import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException, Query } from '@nestjs/common';
import { RankService } from './api.service';
import { CreateRankDto } from './dto/create-api.dto';
import { UpdateRankDto } from './dto/update-api.dto';
import { Rank } from 'src/schemas/rank.schema'; // Adjust the import path as per your project structure
import { ICollege } from 'src/college/college.interface';

@Controller('ranks')
export class RankController {
    constructor(private readonly rankService: RankService) {}

    @Post()
    async createRank(@Body() createRankDto: CreateRankDto): Promise<Rank> {
        return this.rankService.createRank(createRankDto);
    }

    @Get()
    async getAllRanks(
        @Query('category') category?: string, 
        @Query('course') course?: string,
        @Query('college_type') college_type?: string,
        @Query('counselling_type') counselling_type?: string
    ): Promise<Rank[]> {
        return this.rankService.getAllRanks(category, course, college_type, counselling_type);
    }


    @Get('filter-rank')
    async getRanksAboveThreshold(@Query('rank_value') rank_value: number): Promise<Rank[]> {
        return this.rankService.getRanksFilter(rank_value);
    }

    @Get('filter-score')
    async getScoresBelowThreshold(@Query('score_value') score: number): Promise<Rank[]> {
        return this.rankService.getScoresFilter(score);
    }

    @Get('filter-budget')
    async getBudgetsAboveThreshold(@Query('budget_value') budget_value: number): Promise<Rank[]> {
        return this.rankService.getBudgetsFilter(budget_value);
    }

    @Get(':id')
    async getRank(@Param('id') rankId: string): Promise<Rank> {
        const rank = await this.rankService.getRank(rankId);
        if (!rank) {
            throw new NotFoundException(`Rank with id ${rankId} not found`);
        }
        return rank;
    }

    @Put(':id')
    async updateRank(@Param('id') rankId: string, @Body() updateRankDto: UpdateRankDto): Promise<Rank> {
        const updatedRank = await this.rankService.updateRank(rankId, updateRankDto);
        if (!updatedRank) {
            throw new NotFoundException(`Rank with id ${rankId} not found`);
        }
        return updatedRank;
    }

    @Delete(':id')
    async deleteRank(@Param('id') rankId: string): Promise<Rank> {
        const deletedRank = await this.rankService.deleteRank(rankId);
        if (!deletedRank) {
            throw new NotFoundException(`Rank with id ${rankId} not found`);
        }
        return deletedRank;
    }
}
