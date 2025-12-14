import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserA } from './schemas/user.schema';
import { Model } from 'mongoose';
import { Employee } from './schemas/employee.schema';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class UserSqlService {
    // constructor(@InjectModel(UserA.name) private readonly userAModel: Model<UserA>){}  // here we create instance userAModel 

    // async create(): Promise<UserA>{
    //     const user = new this.userAModel({ name: 'Ahmed', address: { street: " 123 Abc", city: "Karachi" } });
    //     return user.save();
    // }

    // async findAll(): Promise<UserA[]> {
    //     return this.userAModel.find();
    // }

    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>,  
        @InjectModel(Profile.name) private profileModel: Model<Profile>
    ){}

    async createEmployee(): Promise<Employee>{
        const profile = await new this.profileModel({
            age: 20,
            qualification: 'Under-graduate'
        }).save();

        const employee = new this.employeeModel({
            name: "Ali",
            profile: profile._id,
        });
        return employee.save();
    };

    async findAll(): Promise<Employee[]> {
        return this.employeeModel.find().populate("profile").exec();
    }

    async search(filters: { name?: string; department?: string}): Promise<Employee[]>{
        // const query = this.employeeModel.createQueryBuilder('employee')
        const query: any = {};
        if(filters.name){
            query.andWhere('employee.name ILIKE : name', { name: `%${filters.name}%`})  // ILIKE use for any case sensitive 
        }
        if(filters.department){
            query.andWhere('employee.department :dept', { dept: `${filters.department}`})
        }
        return query.getMany()
    }
}
