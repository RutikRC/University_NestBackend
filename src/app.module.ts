import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CollegeData, CollegeSchema } from './schemas/data.schema'; // Assuming the schema file is in the same directory
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
