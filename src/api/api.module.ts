import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollegeDataController } from './api.controller';
import { CollegeDataService } from './api.service';
import { CollegeData, CollegeSchema } from '../schemas/data.schema'; // Adjust the path to your schema file

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CollegeData.name, schema: CollegeSchema }
        ]),
    ],
    controllers: [CollegeDataController],
    providers: [CollegeDataService],
})
export class ApiModule {}
