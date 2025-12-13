import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    //  injectModel use this to register schema 
    constructor( @InjectModel(Student.name) private studentModel: Model<StudentDocument> ){}

    async createStudent(data: Partial<Student>): Promise<Student>{
        const newStudent = new this.studentModel(data);
        return newStudent.save();
    }

    async getAllStudent(): Promise<Student[]> {
        return this.studentModel.find().exec()  // exec use to handle promise properly if not use can cause issue 
    }

    async getStdById(id:string): Promise<Student | null>{
        return this.studentModel.findById(id);
    }

    async updateStd(id: string, data: Partial<Student>):Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id, { name: data.name ?? null, age: data.age ?? null, email: data.email ?? null }, { overwrite: true, new: true } );
    }
    
    async patchStd(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id, data, { new : true }).exec();
    }

    async deleteStd(id: string): Promise<Student | null> {
        return this.studentModel.findByIdAndDelete(id).exec();
    }
}
