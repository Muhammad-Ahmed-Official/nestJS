import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    // @Get()
    //     getEmployee(){
    //         return 'Employee data fertch successfully!!'
    //     }
    // constructor(private readonly categoryService: EmployeeService){} // tell nestJS about DI automatically inject 
    // @Get()
    // getAllCategories(){
    //     return this.categoryService.getCategory();
    // }

    constructor(private readonly studentService: EmployeeService){}
    @Get()
    getAll(){
        return this.studentService.getAllStudent();
    }

    @Get(":id")
    getOne(@Param("id") id:string){
        return this.studentService.getStudent(Number(id))
    }

    @Post()
    create(@Body() body: { name: string, age: number}){
        return this.studentService.createStudent(body);
    }

    @Put(":id")
    update(@Param("id") id:string, @Body() body: { name: string, age: number}){
        return this.studentService.updateStudent(Number(id), body)
    }

    @Patch(":id")
    patch(@Param("id") id:string, @Body() body: Partial<{ name: string, age: number}>){
        return this.studentService.pacthStudet(Number(id), body)
    }

    @Delete(":id")
    delete(@Param("id") id:string){
        return this.studentService.deleteStudent(Number(id))
    }

}
