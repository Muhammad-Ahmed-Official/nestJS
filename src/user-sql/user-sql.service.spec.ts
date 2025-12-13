import { Test, TestingModule } from '@nestjs/testing';
import { UserSqlService } from './user-sql.service';

describe('UserSqlService', () => {
  let service: UserSqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSqlService],
    }).compile();

    service = module.get<UserSqlService>(UserSqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
