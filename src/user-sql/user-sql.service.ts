import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserA } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserSqlService {
    constructor(@InjectModel(UserA.name) private readonly userAModel: Model<UserA>){}  // here we create instance userAModel 

    async create(): Promise<UserA>{
        const user = new this.userAModel({ name: 'Ahmed', address: { street: " 123 Abc", city: "Karachi" } });
        return user.save();
    }

    async findAll(): Promise<UserA[]> {
        return this.userAModel().find();
    }
}
