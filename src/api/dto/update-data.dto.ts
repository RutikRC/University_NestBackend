import { PartialType } from "@nestjs/swagger";
import { CreateCollegeDto } from "./create-data.dto";

export class UpdateCollegeDto extends PartialType(CreateCollegeDto){}