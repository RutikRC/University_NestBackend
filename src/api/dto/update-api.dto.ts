import { PartialType } from '@nestjs/swagger';
import { CreateRankDto } from './create-api.dto';

export class UpdateRankDto extends PartialType(CreateRankDto) {}
