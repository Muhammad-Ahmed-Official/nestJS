import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseEventController } from './database-event.controller';

describe('DatabaseEventController', () => {
  let controller: DatabaseEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseEventController],
    }).compile();

    controller = module.get<DatabaseEventController>(DatabaseEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
