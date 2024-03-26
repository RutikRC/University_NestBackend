import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CollegeData, CollegeSchema } from './schemas/data.schema'; // Assuming the schema file is in the same directory
import { CollegeService } from './college/college.service';
import { CollegeController } from './college/college.controller';
import { CollegeModule } from './college/college.module';
import { RankService } from './api/api.service';
import { RankController } from './api/api.controller';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    CollegeModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
