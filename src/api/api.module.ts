import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RankService } from './api.service';
import { RankController } from './api.controller';
import { Rank, RankSchema } from 'src/schemas/rank.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Rank.name, schema: RankSchema}]),],
    controllers: [RankController],
    providers: [RankService],
})
export class ApiModule {}
