import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCollegeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    code: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    college_name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    course: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    college_type: string;
    

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    counselling_type: string;
}