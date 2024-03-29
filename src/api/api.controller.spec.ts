import { Test, TestingModule } from '@nestjs/testing';
import { CollegeDataController } from './api.controller';

describe('CollegeDataController', () => {
  let controller: CollegeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollegeDataController],
    }).compile();

    controller = module.get<CollegeDataController>(CollegeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
