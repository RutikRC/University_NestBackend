import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollegeService } from './college.service';
import { CollegeController } from './college.controller';
import { CollegeSchema, CollegeData } from 'src/schemas/data.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: CollegeData.name, schema: CollegeSchema }])],
    controllers: [CollegeController],
    providers: [CollegeService],
})
export class CollegeModule {}
