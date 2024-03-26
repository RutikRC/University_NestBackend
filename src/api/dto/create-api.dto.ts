import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRankDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    rank: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    score: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    year: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    budget: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    category: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    college: string; // Assuming this is the ID of the related College
}
