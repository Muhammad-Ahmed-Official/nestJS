import { Module } from '@nestjs/common';
import { UserSqlService } from './user-sql.service';
import { UserController } from 'src/user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserA, Userschema } from './schemas/user.schema';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';

@Module({
    // imports: [MongooseModule.forFeature([{ name: UserA.name, schema: Userschema }])],
    // imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema}, { name: Profile.name, schema: ProfileSchema } ])], //{ same for profile}
    // providers: [UserSqlService],
    // controllers: [UserController],
})

export class UserSqlModule {}