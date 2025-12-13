import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Post()
    async addStd(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data);
    };
    
    @Get()
    async getStd(){
        return this.studentService.getAllStudent();
    };

    @Get(":id")
    async getById(@Param("id") id:string){
        return this.studentService.getStdById(id);
    };

    @Put(":id")
    async updateStd(@Param("id") id: string, @Body() data: Partial<Student>){
        return this.studentService.updateStd(id, data)
    }

    @Patch(":id")
    async patchStd(@Param("id") id: string, @Body() data: Partial<Student>){
        return this.studentService.patchStd(id, data);
    }

    @Delete(":id")
    async deleteStd(@Param("id") id: string){
        return this.studentService.deleteStd(id);
    }

    
}