import { Test, TestingModule } from '@nestjs/testing';
import { UserSqlController } from './user-sql.controller';

describe('UserSqlController', () => {
  let controller: UserSqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSqlController],
    }).compile();

    controller = module.get<UserSqlController>(UserSqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
