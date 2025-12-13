import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseEventService } from './database-event.service';

describe('DatabaseEventService', () => {
  let service: DatabaseEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseEventService],
    }).compile();

    service = module.get<DatabaseEventService>(DatabaseEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
