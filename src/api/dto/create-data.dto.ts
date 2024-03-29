import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCollegeDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    code: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    college_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    course: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    college_type: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    counselling_type: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    category: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    r2021: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    s2021: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    r2022: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    s2022: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    budget: string;
}
