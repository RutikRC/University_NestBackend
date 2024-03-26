import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRankDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    rank: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    score: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    year: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    budget: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    category: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    college: string; // Assuming this is the ID of the related College
}
