import { Module } from '@nestjs/common';
import { UserSqlService } from './user-sql.service';
import { UserController } from 'src/user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserA, Userschema } from './schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserA.name, schema: Userschema }])],
    providers: [UserSqlService],
    controllers: [UserController],
})

export class UserSqlModule {}