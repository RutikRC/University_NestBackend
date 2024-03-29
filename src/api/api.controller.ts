import { Controller, Post, UploadedFile, UseInterceptors, Body, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CollegeDataService } from './api.service';
import { diskStorage } from 'multer';

@Controller('college')
export class CollegeDataController {
  constructor(private readonly collegeService: CollegeDataService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './downloads',
      }),
    }),
  )
  async uploadXLSX(@UploadedFile() file: Express.Multer.File, @Body('sheetName') sheetName: string): Promise<void> {
    try {
      await this.collegeService.uploadXLSX(file, sheetName);
    } catch (error) {
      throw new HttpException(`Failed to upload XLSX file: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}