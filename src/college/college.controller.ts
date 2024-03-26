import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { CollegeService } from './college.service';
import { CreateCollegeDto } from './dto/create-college.dto';
import { UpdateCollegeDto } from './dto/update-college.dto';
import { ICollege } from './college.interface';

@Controller('colleges')
export class CollegeController {
    constructor(private readonly collegeService: CollegeService) {}

    @Post()
    async createCollege(@Body() createCollegeDto: CreateCollegeDto): Promise<ICollege> {
        return this.collegeService.createCollege(createCollegeDto);
    }

    @Get()
    async getAllColleges(): Promise<ICollege[]> {
        return this.collegeService.getAllColleges();
    }

    @Get(':code')
    async getCollege(@Param('code') code: string): Promise<ICollege> {
        const college = await this.collegeService.getCollege(code);
        if (!college) {
            throw new NotFoundException(`College with code ${code} not found`);
        }
        return college;
    }

    @Put(':code')
    async updateCollege(@Param('code') code: string, @Body() updateCollegeDto: UpdateCollegeDto): Promise<ICollege> {
        const updatedCollege = await this.collegeService.updateCollege(code, updateCollegeDto);
        if (!updatedCollege) {
            throw new NotFoundException(`College with code ${code} not found`);
        }
        return updatedCollege;
    }

    @Delete(':code')
    async deleteCollege(@Param('code') code: string): Promise<ICollege> {
        const deletedCollege = await this.collegeService.deleteCollege(code);
        if (!deletedCollege) {
            throw new NotFoundException(`College with code ${code} not found`);
        }
        return deletedCollege;
    }
}
